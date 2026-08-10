import { createServerFn } from '@tanstack/react-start'
import { outlets } from '#/data/outlets'
import { reviews as fallbackReviews, googleSummary as fallbackSummary } from '#/data/reviews'
import type { GoogleSummary, Review } from '#/types/content'

const FIELD_MASK = 'rating,userRatingCount,reviews'
const CACHE_NAME = 'google-places-reviews'
const CACHE_TTL_SECONDS = 60 * 60 * 24

type PlaceReview = {
  rating: number
  relativePublishTimeDescription: string
  text?: { text: string }
  authorAttribution?: { displayName: string }
  googleMapsUri?: string
}

type PlaceDetails = {
  rating?: number
  userRatingCount?: number
  reviews?: PlaceReview[]
}

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

async function fetchPlace(placeId: string, apiKey: string): Promise<PlaceDetails> {
  const cacheKey = new Request(`https://places.googleapis.com/v1/places/${placeId}`)
  const cache = typeof caches !== 'undefined' ? await caches.open(CACHE_NAME) : undefined
  const cached = await cache?.match(cacheKey)
  if (cached) return cached.json()

  const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
    headers: { 'X-Goog-Api-Key': apiKey, 'X-Goog-FieldMask': FIELD_MASK },
  })
  if (!res.ok) throw new Error(`Places API ${res.status}`)
  const data = (await res.json()) as PlaceDetails

  await cache?.put(
    cacheKey,
    new Response(JSON.stringify(data), {
      headers: { 'Cache-Control': `public, max-age=${CACHE_TTL_SECONDS}`, 'content-type': 'application/json' },
    }),
  )
  return data
}

export const getGoogleReviews = createServerFn().handler(async (): Promise<{ reviews: Review[]; summary: GoogleSummary }> => {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  if (!apiKey) return { reviews: fallbackReviews, summary: fallbackSummary }

  try {
    const results = await Promise.all(
      outlets.map(async (outlet) => ({ outlet, data: await fetchPlace(outlet.placeId, apiKey) })),
    )

    const reviews: Review[] = results.flatMap(({ outlet, data }) =>
      (data.reviews ?? []).map((review, i) => ({
        id: `${outlet.id}-${i}`,
        author: review.authorAttribution?.displayName ?? 'Google user',
        initials: initials(review.authorAttribution?.displayName ?? 'Google user'),
        rating: review.rating,
        outlet: outlet.name,
        timeAgo: review.relativePublishTimeDescription,
        body: review.text?.text ?? '',
        sourceUrl: review.googleMapsUri,
      })),
    )
    if (reviews.length === 0) return { reviews: fallbackReviews, summary: fallbackSummary }

    const total = results.reduce((sum, { data }) => sum + (data.userRatingCount ?? 0), 0)
    const weightedRating = total
      ? results.reduce((sum, { data }) => sum + (data.rating ?? 0) * (data.userRatingCount ?? 0), 0) / total
      : fallbackSummary.rating

    return { reviews, summary: { rating: Math.round(weightedRating * 10) / 10, total } }
  } catch {
    return { reviews: fallbackReviews, summary: fallbackSummary }
  }
})
