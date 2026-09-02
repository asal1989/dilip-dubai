import Image from 'next/image';
import Reveal from './Reveal';
import { icons } from '@/lib/icons';
import { advantages } from '@/data/whyus';

export default function WhyUs() {
  const ArrowRight = icons.ArrowRight;

  return (
    <section id="why-us" className="relative overflow-hidden bg-off">
      <div className="chevron-field pointer-events-none absolute inset-y-0 right-0 w-1/2" aria-hidden="true" />
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[380px] lg:min-h-[600px]">
          <Image
            src="/images/why-us.svg"
            alt="Architectural interior of a completed Triad Built Group project"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <Reveal className="relative px-5 py-20 sm:px-8 lg:py-28 lg:pl-16">
          <p className="label text-teal">Why Choose Us</p>
          <h2 className="mt-5 text-3xl text-navy sm:text-[2.5rem]">
            Technical Expertise
            <br />
            You Can Rely On.
          </h2>

          <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {advantages.map((item) => (
              <div key={item.number}>
                <span className="font-mono text-sm font-medium tracking-[0.07em] text-teal">
                  {item.number}
                </span>
                <h3 className="mt-2 font-sans text-base font-semibold text-navy">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/55">{item.description}</p>
              </div>
            ))}
          </div>

          <a
            href="#about"
            className="group mt-12 inline-flex items-center gap-2 border border-navy/20 px-5 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.06em] text-navy transition-colors hover:border-teal hover:text-teal"
          >
            Discover Our Approach
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
