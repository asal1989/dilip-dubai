import Link from 'next/link';
import { ArrowUpRight } from '@/icons';
import { icons } from '@/icons';
import { services } from '@/data/content';
import TiltCard from '@/components/TiltCard';

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
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? icons.Wrench;
            return (
              <TiltCard key={service.code} index={i} contentClassName="p-6">
                <div className="flex items-start justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-sm bg-gradient-to-br from-teal-bright/30 to-teal/10 text-teal-bright ring-1 ring-teal-bright/20 transition-colors duration-300 group-hover:from-teal-bright group-hover:to-teal-bright group-hover:text-navy"
                    style={{ transform: 'translateZ(34px)' }}
                  >
                    <Icon size={22} />
                  </div>
                  <span
                    className="pt-1 font-mono text-[0.7rem] text-cream/55"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    {service.code}
                  </span>
                </div>

                <h3
                  className="mt-5 font-display text-base font-semibold leading-snug text-cream"
                  style={{ transform: 'translateZ(16px)' }}
                >
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">{service.description}</p>

                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 font-display text-sm font-semibold text-teal-bright transition-colors hover:text-cream"
                  style={{ transform: 'translateZ(12px)' }}
                >
                  Enquire Now
                  <ArrowUpRight size={15} />
                </Link>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
