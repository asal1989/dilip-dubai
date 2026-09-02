import ServiceCard from './ServiceCard';
import Reveal from './Reveal';
import { icons } from '@/lib/icons';
import { services } from '@/data/services';

export default function Services() {
  const ArrowRight = icons.ArrowRight;

  return (
    <section id="services" className="bg-off py-24 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[340px_1fr] lg:gap-14 xl:grid-cols-[380px_1fr]">
          <Reveal>
            <p className="label text-teal">Our Services</p>
            <h2 className="mt-5 text-[1.9rem] leading-[1.12] text-navy sm:text-[2.3rem]">
              Technical Expertise.
              <br />
              Built Around Your Property.
            </h2>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-navy/60">
              From MEP systems to finishing and maintenance, we provide complete technical solutions
              for modern properties.
            </p>
            <a
              href="#services"
              className="group mt-8 inline-flex items-center gap-2 border border-navy/20 px-5 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.06em] text-navy transition-colors hover:border-teal hover:text-teal"
            >
              View All Services
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.number} delay={(i % 4) * 70} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
