import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPinIcon, ArrowRightIcon, ClockIcon, WifiIcon, CreditCardIcon } from 'lucide-react';
import { heroImages } from '../data/outlets';

const badges = [
{ icon: ClockIcon, label: 'Open 24/7' },
{ icon: CreditCardIcon, label: 'Cashless payments' },
{ icon: WifiIcon, label: 'Free Wi-Fi & massage chairs' }];


export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % heroImages.length), 6000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative isolate min-h-[92vh] w-full overflow-hidden bg-ink">
      <AnimatePresence mode="sync">
        <motion.img
          key={heroImages[index].src}
          src={heroImages[index].src}
          alt={heroImages[index].alt}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: 7, ease: 'linear' } }}
          className="absolute inset-0 h-full w-full object-cover" />
        
      </AnimatePresence>
      <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"
        aria-hidden="true" />
      

      <div className="relative mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col justify-center px-5 pb-28 pt-32 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-white backdrop-blur">
          
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden="true" />
          Proudly Singaporean · 3 outlets islandwide
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="max-w-4xl font-display text-4xl font-extrabold uppercase leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-7xl">
          
          The ultimate modern
          <br />
          household partner.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
          
          24/7 smart laundromats &amp; premium vending solutions — spotless machines, free Wi-Fi,
          massage chairs and fully cashless convenience, right in your neighbourhood.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row">
          
          <a
            href="#laundromats"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-400">
            
            <MapPinIcon className="h-5 w-5" aria-hidden="true" />
            Find a laundromat near me
          </a>
          <a
            href="#franchise"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-white backdrop-blur transition-colors hover:bg-white hover:text-ink">
            
            Explore franchise opportunities
            <ArrowRightIcon
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true" />
            
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
          
          {badges.map((badge) =>
          <li key={badge.label} className="flex items-center gap-2 text-sm font-semibold text-white/75">
              <badge.icon className="h-4 w-4 text-brand-300" aria-hidden="true" />
              {badge.label}
            </li>
          )}
        </motion.ul>
      </div>

      <div className="absolute bottom-8 right-5 z-10 flex gap-2 sm:right-8">
        {heroImages.map((image, i) =>
        <button
          key={image.src}
          type="button"
          onClick={() => setIndex(i)}
          aria-label={`Show slide ${i + 1}`}
          aria-current={i === index}
          className={`h-1.5 rounded-full transition-all ${
          i === index ? 'w-10 bg-brand-400' : 'w-4 bg-white/40 hover:bg-white/70'}`
          } />

        )}
      </div>
    </section>);

}