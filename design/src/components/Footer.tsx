import React from 'react';
import { InstagramIcon, FacebookIcon, MusicIcon, LinkedinIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { BRAND, LOGO_URL } from '../data/brand';
import { outlets } from '../data/outlets';

const siteMap = [
{
  heading: 'Laundromats',
  links: [
  { label: 'Find an outlet', href: '#laundromats' },
  { label: 'Machines & capacities', href: '#laundromats' },
  { label: 'Wi-Fi & massage chairs', href: '#laundromats' },
  { label: 'Customer reviews', href: '#reviews' }]

},
{
  heading: 'Vending',
  links: [
  { label: 'Cashless payments', href: '#vending' },
  { label: 'Restocking protocols', href: '#vending' },
  { label: 'Machine placement enquiry', href: '#franchise-form' }]

},
{
  heading: 'Franchise',
  links: [
  { label: 'Why franchise with us', href: '#franchise' },
  { label: 'Journey to ownership', href: '#franchise' },
  { label: 'Franchise FAQ', href: '#franchise' },
  { label: 'Submit an inquiry', href: '#franchise-form' }]

}];


const socials = [
{ label: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com' },
{ label: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com' },
{ label: 'TikTok', icon: MusicIcon, href: 'https://tiktok.com' },
{ label: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com' }];


export function Footer() {
  return (
    <footer className="w-full bg-ink pt-20 text-white/70">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={LOGO_URL}
                alt=""
                className="h-14 w-14 rounded-full bg-white object-contain" />
              
              <span className="leading-tight">
                <span className="block font-display text-base font-extrabold uppercase tracking-[0.12em] text-white">
                  {BRAND.name}
                </span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-400">
                  {BRAND.tagline}
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Singapore's 24/7 smart laundromat and premium vending network — the modern household
              partner for busy homes and hands-off investors.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2 font-semibold text-white transition-colors hover:text-brand-400">
                
                <MailIcon className="h-4 w-4 text-brand-400" aria-hidden="true" />
                {BRAND.email}
              </a>
              <a
                href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 font-semibold text-white transition-colors hover:text-brand-400">
                
                <PhoneIcon className="h-4 w-4 text-brand-400" aria-hidden="true" />
                {BRAND.phone}
              </a>
            </div>
            <ul className="mt-6 flex gap-3">
              {socials.map((social) =>
              <li key={social.label}>
                  <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-brand-400 hover:bg-brand-500 hover:text-white">
                  
                    <social.icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              )}
            </ul>
          </div>

          <nav aria-label="Site map" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {siteMap.map((group) =>
            <div key={group.heading}>
                <h2 className="font-display text-xs font-extrabold uppercase tracking-[0.2em] text-white">
                  {group.heading}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) =>
                <li key={link.label}>
                      <a href={link.href} className="text-sm transition-colors hover:text-brand-400">
                        {link.label}
                      </a>
                    </li>
                )}
                </ul>
              </div>
            )}
            <div>
              <h2 className="font-display text-xs font-extrabold uppercase tracking-[0.2em] text-white">
                Our outlets
              </h2>
              <ul className="mt-4 space-y-2.5">
                {outlets.map((outlet) =>
                <li key={outlet.id}>
                    <a href="#laundromats" className="text-sm transition-colors hover:text-brand-400">
                      {outlet.name}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 py-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND.name} Pte Ltd · {BRAND.domain} · All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-5">
            <li>
              <a href="#top" className="transition-colors hover:text-brand-400">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#top" className="transition-colors hover:text-brand-400">
                Terms of service
              </a>
            </li>
            <li>
              <a href="#top" className="transition-colors hover:text-brand-400">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>);

}