import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import type { Outlet } from '../types/content';

export function OutletCarousel({ outlet }: {outlet: Outlet;}) {
  const [index, setIndex] = useState(0);
  const total = outlet.images.length;
  const current = outlet.images[Math.min(index, total - 1)];

  const go = (delta: number) => setIndex((i) => (i + delta + total) % total);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-100">
      <div className="relative aspect-[3/2] w-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={`${outlet.id}-${current.src}-${index}`}
            src={current.src}
            alt={`${outlet.name} — ${current.caption}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 h-full w-full object-cover" />
          
        </AnimatePresence>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-ink/80 to-transparent p-4">
        <p className="text-sm font-semibold text-white">{current.caption}</p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous photo"
            className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-ink transition-colors hover:bg-white">
            
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next photo"
            className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-ink transition-colors hover:bg-white">
            
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>);

}