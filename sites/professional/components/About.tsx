import Image from 'next/image';
import Reveal from './Reveal';
import { icons } from '@/lib/icons';
import { company } from '@/data/site';

export default function About() {
  const ArrowRight = icons.ArrowRight;
  const Award = icons.Award;

  return (
    <section id="about" className="relative overflow-hidden bg-navy">
      <span id="team" aria-hidden className="block" />
      <div className="arch-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1280px] items-stretch gap-0 lg:grid-cols-2">
        <Reveal className="px-5 py-20 sm:px-8 lg:py-28 lg:pr-16">
          <p className="label text-teal">Who We Are</p>
          <h2 className="mt-5 text-3xl text-off sm:text-[2.5rem]">
            Built on Precision.
            <br />
            Driven by Performance.
          </h2>
          <p className="mt-6 max-w-md text-[0.96rem] leading-relaxed text-off/70">
            {company.name} is a Dubai-based technical services provider delivering high-quality MEP,
            maintenance, finishing and installation solutions.
          </p>
          <p className="mt-4 max-w-md text-[0.96rem] leading-relaxed text-off/70">
            We focus on safety, efficiency, quality and long-term value for every property we work
            on.
          </p>
          <a
            href="#contact"
            className="group mt-9 inline-flex items-center gap-2 border border-off/30 px-5 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.06em] text-off transition-colors hover:border-teal hover:text-teal"
          >
            Learn More About Us
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <div className="relative min-h-[360px] lg:min-h-[560px]">
          <Image
            src="/images/about-building.svg"
            alt="Modern commercial tower maintained by Triad Built Group"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute bottom-6 left-6 max-w-[15rem] border border-navy/10 bg-white p-5 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.5)]">
            <Award size={22} className="text-teal" strokeWidth={1.5} />
            <p className="mt-3 text-sm leading-relaxed text-navy/75">
              Committed to excellence, safety and long-term client satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
