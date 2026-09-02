import Image from 'next/image';
import Reveal from './Reveal';
import { icons } from '@/lib/icons';
import { company } from '@/data/site';

export default function CTA() {
  const ArrowRight = icons.ArrowRight;
  const Phone = icons.Phone;

  return (
    <section className="relative isolate overflow-hidden bg-navy py-20 sm:py-24">
      <Image
        src="/images/cta-dubai.svg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover object-bottom opacity-30"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/85 to-navy/70" />

      <Reveal className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr_auto]">
        <h2 className="text-3xl text-off sm:text-[2.4rem]">
          Your Property Deserves
          <br />
          Better Technical Care.
        </h2>

        <p className="text-[0.95rem] leading-relaxed text-off/70">
          Tell us what your property needs and our technical team will help you find the right
          solution.
        </p>

        <div className="flex flex-col gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 bg-teal px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-teal-bright"
          >
            Get a Free Quote
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={company.phoneHref}
            className="inline-flex items-center justify-center gap-2 border border-off/30 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.05em] text-off transition-colors hover:border-teal hover:text-teal"
          >
            Call Us Now
          </a>
          <a
            href={company.phoneHref}
            className="mt-1 inline-flex items-center gap-2 text-off/75 transition-colors hover:text-off"
          >
            <Phone size={15} className="text-teal" />
            <span className="font-mono text-sm">{company.phone}</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
