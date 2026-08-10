import { useEffect, useState } from 'react';
import { MenuIcon, XIcon, PhoneIcon } from 'lucide-react';
import { LOGO_URL } from '#/data/brand';

const links = [
  { label: 'Laundromats', href: '#laundromats' },
  { label: 'Vending', href: '#vending' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Franchise', href: '#franchise' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] transition-colors duration-300 ${
        scrolled || open ? 'bg-white/95 backdrop-blur border-b border-slate-200' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="The Good Husband Laundromats & Drycleaners"
            className="h-12 w-12 rounded-full bg-white object-contain ring-1 ring-black/5"
          />
          <span className="hidden sm:block leading-tight">
            <span
              className={`block font-display text-[15px] font-extrabold uppercase tracking-[0.14em] ${
                scrolled || open ? 'text-ink' : 'text-white'
              }`}
            >
              The Good Husband
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
              Laundromats &amp; Drycleaners
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors hover:text-brand-500 ${
                scrolled ? 'text-ink-soft' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+6560000000"
            className={`flex items-center gap-2 text-sm font-semibold transition-colors hover:text-brand-500 ${
              scrolled ? 'text-ink-soft' : 'text-white/90'
            }`}
          >
            <PhoneIcon className="h-4 w-4" aria-hidden="true" />
            +65 6000 0000
          </a>
          <a
            href="#franchise-form"
            className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-600"
          >
            Franchise with us
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className={`rounded-full p-2 lg:hidden ${scrolled || open ? 'text-ink' : 'text-white'}`}
        >
          {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 pb-6 pt-4 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-semibold text-ink-soft hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#franchise-form"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-brand-500 px-5 py-3 text-center text-sm font-bold text-white"
          >
            Franchise with us
          </a>
        </div>
      )}
    </header>
  );
}
