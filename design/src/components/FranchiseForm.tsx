import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, Loader2Icon } from 'lucide-react';
import { capitalTiers, regions, timelines } from '../data/franchise';

type FormState = {
  name: string;
  email: string;
  phone: string;
  capital: string;
  region: string;
  timeline: string;
  notes: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  capital: '',
  region: '',
  timeline: '',
  notes: ''
};

const steps = ['About you', 'Investment profile', 'Timeline & notes'];

const inputClass =
'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100';

function OptionGroup({
  legend,
  options,
  value,
  onChange





}: {legend: string;options: string[];value: string;onChange: (v: string) => void;}) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-bold text-ink">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) =>
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          aria-pressed={value === option}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
          value === option ?
          'border-brand-500 bg-brand-500 text-white' :
          'border-slate-200 bg-white text-ink-soft hover:border-brand-300'}`
          }>
          
            {option}
          </button>
        )}
      </div>
    </fieldset>);

}

export function FranchiseForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle');
  const [error, setError] = useState<string | null>(null);

  const update = (patch: Partial<FormState>) => setForm((f) => ({ ...f, ...patch }));

  const validateStep = () => {
    if (step === 0) {
      if (!form.name.trim()) return 'Please enter your full name.';
      if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email address.';
      if (!form.phone.trim()) return 'Please enter a contact number.';
    }
    if (step === 1) {
      if (!form.capital) return 'Select the capital tier you are working with.';
      if (!form.region) return 'Select a preferred territory.';
    }
    if (step === 2 && !form.timeline) return 'Let us know your intended timeline.';
    return null;
  };

  const next = () => {
    const message = validateStep();
    if (message) {
      setError(message);
      return;
    }
    setError(null);
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const message = validateStep();
    if (message) {
      setError(message);
      return;
    }
    setError(null);
    setStatus('submitting');
    window.setTimeout(() => setStatus('done'), 1100);
  };

  if (status === 'done') {
    return (
      <div className="rounded-3xl border border-brand-200 bg-brand-50 p-8 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-500 text-white">
          <CheckIcon className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-extrabold uppercase tracking-tight text-ink">
          Inquiry received
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
          Thanks {form.name.split(' ')[0] || 'there'} — our franchise team will reach out within two
          working days with the capital tier guidelines and next steps for a discovery call.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialState);
            setStep(0);
            setStatus('idle');
          }}
          className="mt-6 text-sm font-bold text-brand-700 underline underline-offset-4">
          
          Submit another inquiry
        </button>
      </div>);

  }

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8"
      noValidate>
      
      <div className="flex items-center gap-3">
        {steps.map((label, i) =>
        <div key={label} className="flex flex-1 items-center gap-3">
            <span
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full font-display text-xs font-extrabold ${
            i <= step ? 'bg-brand-500 text-white' : 'bg-slate-100 text-ink-muted'}`
            }>
            
              {i + 1}
            </span>
            {i < steps.length - 1 &&
          <span
            className={`h-0.5 flex-1 rounded-full ${i < step ? 'bg-brand-500' : 'bg-slate-200'}`}
            aria-hidden="true" />

          }
          </div>
        )}
      </div>
      <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
        Step {step + 1} of {steps.length} — {steps[step]}
      </p>

      <div className="mt-6 min-h-[248px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25 }}
            className="space-y-4">
            
            {step === 0 &&
            <>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-bold text-ink">
                    Full name
                  </label>
                  <input
                  id="name"
                  className={inputClass}
                  value={form.name}
                  onChange={(e) => update({ name: e.target.value })}
                  placeholder="Tan Wei Ming"
                  autoComplete="name" />
                
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-bold text-ink">
                      Email
                    </label>
                    <input
                    id="email"
                    type="email"
                    className={inputClass}
                    value={form.email}
                    onChange={(e) => update({ email: e.target.value })}
                    placeholder="you@company.sg"
                    autoComplete="email" />
                  
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-bold text-ink">
                      Mobile
                    </label>
                    <input
                    id="phone"
                    type="tel"
                    className={inputClass}
                    value={form.phone}
                    onChange={(e) => update({ phone: e.target.value })}
                    placeholder="+65 9123 4567"
                    autoComplete="tel" />
                  
                  </div>
                </div>
              </>
            }

            {step === 1 &&
            <>
                <OptionGroup
                legend="Available capital tier"
                options={capitalTiers}
                value={form.capital}
                onChange={(capital) => update({ capital })} />
              
                <OptionGroup
                legend="Preferred territory in Singapore"
                options={regions}
                value={form.region}
                onChange={(region) => update({ region })} />
              
              </>
            }

            {step === 2 &&
            <>
                <OptionGroup
                legend="Intended timeline to open"
                options={timelines}
                value={form.timeline}
                onChange={(timeline) => update({ timeline })} />
              
                <div>
                  <label htmlFor="notes" className="mb-2 block text-sm font-bold text-ink">
                    Anything else we should know? <span className="font-medium text-ink-muted">(optional)</span>
                  </label>
                  <textarea
                  id="notes"
                  rows={4}
                  className={inputClass}
                  value={form.notes}
                  onChange={(e) => update({ notes: e.target.value })}
                  placeholder="Existing business experience, shortlisted units, partnership structure…" />
                
                </div>
              </>
            }
          </motion.div>
        </AnimatePresence>
      </div>

      {error &&
      <p role="alert" className="mt-2 text-sm font-semibold text-red-600">
          {error}
        </p>
      }

      <div className="mt-6 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => {
            setError(null);
            setStep((s) => Math.max(s - 1, 0));
          }}
          disabled={step === 0}
          className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-bold text-ink-soft transition-colors hover:text-ink disabled:opacity-40">
          
          <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
          Back
        </button>

        {step < steps.length - 1 ?
        <button
          type="button"
          onClick={next}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-ink-soft">
          
            Continue
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </button> :

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-600 disabled:opacity-70">
          
            {status === 'submitting' && <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />}
            {status === 'submitting' ? 'Submitting…' : 'Submit inquiry'}
          </button>
        }
      </div>

      <p className="mt-4 text-xs leading-relaxed text-ink-muted">
        By submitting, you agree to be contacted about franchise opportunities. We never share your
        details with third parties.
      </p>
    </form>);

}