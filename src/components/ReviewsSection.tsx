import { StarIcon, CheckCircle2Icon } from 'lucide-react';
import { reviews, googleSummary } from '#/data/reviews';
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

export function ReviewsSection() {
  return (
    <section id="reviews" className="w-full bg-slate-50 py-20 sm:py-28">
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
                <span className="font-display text-5xl font-extrabold text-ink">{googleSummary.rating}</span>
                <div>
                  <Stars rating={5} />
                  <p className="mt-1 text-sm text-ink-muted">{googleSummary.total} Google reviews</p>
                </div>
              </div>
              <ul className="mt-6 space-y-2">
                {googleSummary.distribution.map((row) => (
                  <li key={row.stars} className="flex items-center gap-3">
                    <span className="w-8 text-xs font-semibold text-ink-muted">{row.stars}★</span>
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                      <span className="block h-full rounded-full bg-brand-500" style={{ width: `${row.percent}%` }} />
                    </span>
                    <span className="w-9 text-right text-xs font-semibold text-ink-muted">{row.percent}%</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 flex items-center gap-2 text-xs font-semibold text-ink-muted">
                <CheckCircle2Icon className="h-4 w-4 text-brand-500" aria-hidden="true" />
                Synced from Google Reviews · updated hourly
              </p>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {reviews.map((review) => (
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
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{review.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
