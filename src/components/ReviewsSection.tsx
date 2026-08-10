import { StarIcon, CheckCircle2Icon } from 'lucide-react';
import type { GoogleSummary, Review } from '#/types/content';
import { SectionHeading } from './SectionHeading';

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon
          key={i}
          className={`h-4 w-4 ${i <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function ReviewsSection({ reviews, summary }: { reviews: Review[]; summary: GoogleSummary }) {
  return (
    <section id="reviews" className="w-full bg-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Social proof engine"
              title="Rated 4.9 by the neighbourhood."
              description="Reviews are pulled live from our Google Business profiles across all three outlets — we publish the 4 and 5 star experiences our customers actually leave."
            />

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-4">
                <span className="font-display text-5xl font-extrabold text-ink">{summary.rating}</span>
                <div>
                  <Stars rating={5} />
                  <p className="mt-1 text-sm text-ink-muted">{summary.total} Google reviews</p>
                </div>
              </div>
              <p className="mt-6 flex items-center gap-2 text-xs font-semibold text-ink-muted">
                <CheckCircle2Icon className="h-4 w-4 text-brand-500" aria-hidden="true" />
                Synced from Google Reviews · updated daily
              </p>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {reviews.slice(0, 6).map((review) => (
              <li key={review.id} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-100 font-display text-sm font-extrabold text-brand-700">
                    {review.initials}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink">{review.author}</p>
                    <p className="text-xs text-ink-muted">
                      {review.outlet} · {review.timeAgo}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <Stars rating={review.rating} />
                </div>
                <p className="mt-3 line-clamp-5 text-sm leading-relaxed text-ink-soft">{review.body}</p>
                {review.body.length > 220 && review.sourceUrl && (
                  <a
                    href={review.sourceUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-1 text-xs font-semibold text-brand-500 hover:underline"
                  >
                    Read more on Google
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=The+Good+Husband+Laundromats+Singapore"
          target="_blank"
          rel="noreferrer noopener"
          className="mt-8 block text-center text-xs font-semibold text-ink-muted underline underline-offset-2"
        >
          Reviews from Google
        </a>
      </div>
    </section>
  );
}
