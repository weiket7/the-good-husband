import { DownloadIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const PRICE_LIST_IMAGE = '/the-good-husband-dry-cleaning-prices.avif';
const PRICE_LIST_PDF = '/the-good-husband-dry-cleaning-prices.pdf';

export function DryCleaningSection() {
  return (
    <section id="dry-cleaning" className="w-full bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Dry cleaning"
          title="Transparent pricing, no surprises."
          description="Drop off at any staffed counter — our full dry cleaning price list is below."
        />

        <a
          href={PRICE_LIST_PDF}
          download
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-600"
        >
          <DownloadIcon className="h-4 w-4" aria-hidden="true" />
          Download price list (PDF)
        </a>

        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
          <img
            src={PRICE_LIST_IMAGE}
            alt="The Good Husband dry cleaning price list"
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
