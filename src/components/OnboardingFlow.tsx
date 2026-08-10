import { motion } from 'framer-motion';
import { franchiseSteps } from '#/data/franchise';

export function OnboardingFlow() {
  return (
    <ol className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {franchiseSteps.map((step, index) => (
        <motion.li
          key={step.number}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: index * 0.06 }}
          className="relative rounded-3xl border border-slate-200 bg-white p-6"
        >
          <div className="flex items-center justify-between">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-500 font-display text-base font-extrabold text-white">
              {step.number}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink-muted">
              {step.duration}
            </span>
          </div>
          <h3 className="mt-5 font-display text-lg font-extrabold uppercase tracking-tight text-ink">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
          {index < franchiseSteps.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute -right-3 top-1/2 hidden h-px w-6 bg-brand-200 md:block"
            />
          )}
        </motion.li>
      ))}
    </ol>
  );
}
