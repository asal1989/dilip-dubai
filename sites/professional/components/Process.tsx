import Reveal from './Reveal';
import { icons } from '@/lib/icons';
import { processSteps } from '@/data/process';

export default function Process() {
  return (
    <section id="process" className="bg-off py-24 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="label text-teal">Our Process</p>
          <h2 className="mt-4 text-3xl text-navy sm:text-[2.5rem]">A Simple, Transparent Process</h2>
        </Reveal>

        <ol className="mt-16 grid gap-y-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
          {processSteps.map((step, i) => {
            const Icon = icons[step.icon];
            return (
              <Reveal
                as="li"
                key={step.number}
                delay={i * 80}
                className="relative flex flex-col items-center px-2 text-center"
              >
                {i < processSteps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-[calc(50%+2.75rem)] right-[-1.25rem] top-7 hidden border-t border-dashed border-navy/25 lg:block"
                  />
                )}
                <span className="grid h-14 w-14 place-items-center rounded-full border border-teal/40 bg-off text-teal">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <span className="mt-5 font-mono text-xs font-medium tracking-[0.07em] text-teal">
                  {step.number}
                </span>
                <h3 className="mt-1 font-sans text-base font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-navy/55">
                  {step.description}
                </p>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
