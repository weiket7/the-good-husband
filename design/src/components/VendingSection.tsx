import React from 'react';
import {
  SmartphoneNfcIcon,
  RadioTowerIcon,
  PackageCheckIcon,
  SparklesIcon,
  ShieldCheckIcon } from
'lucide-react';
import { vendingImage } from '../data/outlets';
import { SectionHeading } from './SectionHeading';

const payments = ['PayNow', 'GrabPay', 'Apple Pay', 'Google Pay', 'Visa', 'Mastercard', 'NETS'];

const protocols = [
{
  icon: RadioTowerIcon,
  title: 'Real-time cellular telemetry',
  body: 'Every unit reports stock levels and machine health to our central logistics hub the moment inventory dips.'
},
{
  icon: PackageCheckIcon,
  title: 'Expiry-aware restocking',
  body: 'Products nearing shelf-life are flagged and rotated automatically, so every batch you buy is fresh.'
},
{
  icon: SparklesIcon,
  title: 'Daily hygiene sweeps',
  body: 'Machine interiors, trays and touchpoints are cleaned on a documented schedule at every outlet.'
},
{
  icon: ShieldCheckIcon,
  title: '100% stock availability',
  body: 'Predictive replenishment targets a full planogram every single day — no empty coils, no dead spirals.'
}];


export function VendingSection() {
  return (
    <section id="vending" className="w-full bg-ink py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="Automated vending solutions"
              title="An autonomous retail division that never closes."
              description="Our vending network runs itself — frictionless cashless checkout at the front, smart-managed logistics at the back." />
            

            <div className="mt-9 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-500 text-white">
                  <SmartphoneNfcIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-extrabold uppercase tracking-tight text-white">
                  Frictionless cashless ecosystem
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                No coins, no hassle. Every machine in our network is outfitted with state-of-the-art
                cashless terminals for instantaneous, secure transactions.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {payments.map((method) =>
                <li
                  key={method}
                  className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-white/80">
                  
                    {method}
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src={vendingImage}
              alt="Row of modern smart vending machines with cashless payment terminals"
              className="h-full w-full object-cover" />
            
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {protocols.map((item) =>
          <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <item.icon className="h-6 w-6 text-brand-400" aria-hidden="true" />
              <h3 className="mt-4 font-display text-base font-extrabold uppercase tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{item.body}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}