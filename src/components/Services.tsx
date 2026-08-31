'use client';

import { ArrowUpRight } from '@/icons';
import { icons } from '@/icons';
import { services } from '@/data/content';
import PeakDivider from './PeakDivider';

export default function Services() {
  return (
    <section id="services" className="bg-navy relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-teal-bright">What We Do</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mt-4 leading-tight">
            Complete Technical Services
          </h2>
          <p className="mt-4 text-cream/65 leading-relaxed">
            A full range of installation, maintenance and finishing works, delivered by one
            technical services partner.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = icons[service.icon] ?? icons.Wrench;
            return (
              <div
                key={service.code}
                className="group relative rounded-sm border border-cream/10 bg-cream/[0.03] p-6 hover:border-teal-bright/50 hover:bg-cream/[0.06] transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-teal/20 text-teal-bright group-hover:bg-teal-bright group-hover:text-navy transition-colors">
                    <Icon size={22} />
                  </div>
                  <span className="font-mono text-[0.7rem] text-cream/60 pt-1">{service.code}</span>
                </div>

                <h3 className="mt-5 font-display text-base font-semibold text-cream leading-snug">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-cream/60 leading-relaxed">{service.description}</p>

                <a
                  href={`#contact?service=${encodeURIComponent(service.title)}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('contact');
                    el?.scrollIntoView({ behavior: 'smooth' });
                    window.dispatchEvent(new CustomEvent('prefill-service', { detail: service.title }));
                  }}
                  className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-teal-bright hover:text-cream transition-colors"
                >
                  Enquire Now
                  <ArrowUpRight size={15} />
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <PeakDivider from="#0F294A" to="#F4F2E7" />
    </section>
  );
}
