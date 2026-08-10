type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, tone = 'light', align = 'left' }: Props) {
  const dark = tone === 'dark';
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'}>
      <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-brand-500">
        <span className="h-px w-8 bg-brand-500" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        className={`font-display text-3xl font-extrabold uppercase leading-[1.08] tracking-tight sm:text-5xl ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? 'text-white/70' : 'text-ink-soft'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
