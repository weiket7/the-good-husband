import React from 'react';
import { TrendingUpIcon, UsersIcon, RepeatIcon, ShieldCheckIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { FranchiseForm } from './FranchiseForm';
import { OnboardingFlow } from './OnboardingFlow';
import { FranchiseFaq } from './FranchiseFaq';

const valueProps = [
{
  icon: ShieldCheckIcon,
  stat: 'Recession-resilient',
  body: 'Laundry is non-discretionary household spend. Demand holds steady through economic cycles and every wet season.'
},
{
  icon: UsersIcon,
  stat: 'Near-zero staffing',
  body: 'Self-service by design. A typical outlet runs on part-time cleaning support rather than a full shift roster.'
},
{
  icon: RepeatIcon,
  stat: 'Dual revenue lines',
  body: 'Coupled vending operations layer continuous cash flow on top of wash and dry cycles from day one.'
},
{
  icon: TrendingUpIcon,
  stat: 'High-yield model',
  body: 'Long machine lifespans and low variable costs drive strong contribution margins per square foot.'
}];


export function FranchiseSection() {
  return (
    <section id="franchise" className="w-full bg-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Franchise opportunities"
          title="Own a high-yield, low-labour outlet."
          description="The Good Husband is a turnkey system for entrepreneurs who want dependable, largely passive cash flow — built on Singapore's most reliable household need." />
        

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((item) =>
          <div key={item.stat} className="rounded-3xl bg-slate-50 p-6">
              <item.icon className="h-6 w-6 text-brand-500" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-extrabold uppercase tracking-tight text-ink">
                {item.stat}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          )}
        </div>

        <div id="franchise-form" className="mt-20 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl">
              Start your qualification
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Three short steps. Once submitted, you'll receive the capital tier guidelines and an
              invitation to a discovery call with our franchise team.
            </p>
            <ul className="mt-6 space-y-3 text-sm font-semibold text-ink-soft">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                Territory protection on every signed outlet
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                Full turnkey fit-out, equipment and telemetry stack
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                Operational training and ongoing servicing included
              </li>
            </ul>
          </div>
          <FranchiseForm />
        </div>

        <div className="mt-24">
          <SectionHeading
            align="center"
            eyebrow="The journey to ownership"
            title="Six steps from inquiry to grand launch." />
          
          <div className="mt-12">
            <OnboardingFlow />
          </div>
        </div>

        <div className="mt-24 grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
          <SectionHeading
            eyebrow="Franchise FAQ"
            title="Answers before you commit."
            description="Still unsure? Submit an inquiry and our team will walk you through the numbers in detail." />
          
          <FranchiseFaq />
        </div>
      </div>
    </section>);

}