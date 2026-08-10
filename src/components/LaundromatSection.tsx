import { useState } from 'react';
import { ClientOnly } from '@tanstack/react-router';
import {
  MapPinIcon,
  NavigationIcon,
  ClockIcon,
  WashingMachineIcon,
  StarIcon,
  WifiIcon,
  CoffeeIcon,
  ArmchairIcon,
  ExternalLinkIcon,
} from 'lucide-react';
import { outlets } from '#/data/outlets';
import { OutletMap } from './OutletMap';
import { OutletCarousel } from './OutletCarousel';
import { SectionHeading } from './SectionHeading';

const lifestyleFeatures = [
  {
    icon: WifiIcon,
    title: 'Complimentary fast Wi-Fi',
    body: 'Fibre-backed connectivity at every outlet so you can work, stream or study while the cycle runs.',
  },
  {
    icon: CoffeeIcon,
    title: 'In-house F&B vending',
    body: 'Chilled drinks, hot beverages and snacks on site — restocked on a smart telemetry schedule.',
  },
  {
    icon: ArmchairIcon,
    title: 'Premium massage chairs',
    body: 'Turn a 40-minute wash into a therapeutic reset with full-body massage chairs in the lounge.',
  },
];

function distanceKm(aLat: number, aLng: number, bLat: number, bLng: number) {
  const toRad = (v: number) => (v * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(bLat - aLat);
  const dLng = toRad(bLng - aLng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

type GeoState = 'idle' | 'locating' | 'located' | 'denied';

export function LaundromatSection() {
  const [activeId, setActiveId] = useState(outlets[0].id);
  const [geoState, setGeoState] = useState<GeoState>('idle');
  const [distances, setDistances] = useState<Record<string, number>>({});

  const active = outlets.find((o) => o.id === activeId) ?? outlets[0];

  const locate = () => {
    if (!('geolocation' in navigator)) {
      setGeoState('denied');
      return;
    }
    setGeoState('locating');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const next: Record<string, number> = {};
        outlets.forEach((o) => {
          next[o.id] = distanceKm(pos.coords.latitude, pos.coords.longitude, o.lat, o.lng);
        });
        setDistances(next);
        const nearest = Object.entries(next).sort((a, b) => a[1] - b[1])[0];
        if (nearest) setActiveId(nearest[0]);
        setGeoState('located');
      },
      () => setGeoState('denied'),
      { timeout: 8000 }
    );
  };

  return (
    <section id="laundromats" className="w-full bg-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Smart laundromat ecosystem"
            title="Three outlets. Open every hour of the day."
            description="Find your nearest Good Husband laundromat, check what's inside before you head down, and see what real neighbours are saying."
          />
          <button
            type="button"
            onClick={locate}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-5 py-3 text-sm font-bold text-brand-700 transition-colors hover:bg-brand-100 disabled:opacity-60"
            disabled={geoState === 'locating'}
          >
            <NavigationIcon className="h-4 w-4" aria-hidden="true" />
            {geoState === 'locating' ? 'Locating you…' : 'Use my location'}
          </button>
        </div>

        <p aria-live="polite" className="mt-4 text-sm font-semibold text-ink-muted">
          {geoState === 'located' && `Nearest outlet highlighted: ${active.name}.`}
          {geoState === 'denied' && 'Location unavailable — browse all three outlets below.'}
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          <ClientOnly
            fallback={
              <div className="h-[380px] w-full animate-pulse rounded-3xl border border-slate-200 bg-slate-100 lg:h-full lg:min-h-[560px]" />
            }
          >
            <OutletMap outlets={outlets} activeId={activeId} onSelect={setActiveId} />
          </ClientOnly>

          <div className="flex flex-col gap-4">
            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar" role="tablist" aria-label="Outlets">
              {outlets.map((outlet, i) => (
                <button
                  key={outlet.id}
                  role="tab"
                  type="button"
                  aria-selected={outlet.id === activeId}
                  onClick={() => setActiveId(outlet.id)}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-bold transition-colors ${
                    outlet.id === activeId ? 'bg-ink text-white' : 'bg-slate-100 text-ink-soft hover:bg-slate-200'
                  }`}
                >
                  <span className="mr-2 text-brand-400">{i + 1}</span>
                  {outlet.name}
                  {distances[outlet.id] !== undefined && (
                    <span className="ml-2 font-medium opacity-70">{distances[outlet.id].toFixed(1)} km</span>
                  )}
                </button>
              ))}
            </div>

            <article className="rounded-3xl border border-slate-200 p-5 sm:p-6">
              <OutletCarousel outlet={active} />

              <div className="mt-5 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-ink">
                    {active.name}
                  </h3>
                  <p className="mt-1 flex items-start gap-2 text-sm text-ink-soft">
                    <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                    <span>
                      {active.address}
                      <br />
                      {active.postal}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5">
                  <StarIcon className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  <span className="text-sm font-bold text-ink">{active.rating}</span>
                  <span className="text-xs text-ink-muted">({active.reviewCount})</span>
                </div>
              </div>

              <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3">
                  <ClockIcon className="h-4 w-4 text-brand-500" aria-hidden="true" />
                  <div>
                    <dt className="sr-only">Opening hours</dt>
                    <dd className="text-sm font-semibold text-ink">{active.hours}</dd>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3">
                  <WashingMachineIcon className="h-4 w-4 text-brand-500" aria-hidden="true" />
                  <div>
                    <dt className="sr-only">Machines</dt>
                    <dd className="text-sm font-semibold text-ink">{active.machines}</dd>
                  </div>
                </div>
              </dl>

              <ul className="mt-4 flex flex-wrap gap-2">
                {active.amenities.map((amenity) => (
                  <li
                    key={amenity}
                    className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-ink-soft"
                  >
                    {amenity}
                  </li>
                ))}
              </ul>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${active.address} ${active.postal}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-600"
              >
                Get directions
                <ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {lifestyleFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-colors hover:border-brand-200 hover:bg-brand-50"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500 text-white">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-extrabold uppercase tracking-tight text-ink">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
