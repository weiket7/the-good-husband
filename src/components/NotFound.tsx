export function NotFound() {
  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center px-5 text-center">
      <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-500">404</p>
      <h1 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <a
        href="/"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-600"
      >
        Back to home
      </a>
    </div>
  );
}
