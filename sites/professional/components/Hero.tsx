import Image from 'next/image';
import { icons } from '@/lib/icons';
import { company } from '@/data/site';
import { heroStats } from '@/data/stats';

export default function Hero() {
  const Phone = icons.Phone;
  const ArrowRight = icons.ArrowRight;

  return (
    <section id="home" className="hero-shell relative isolate flex items-center overflow-hidden bg-navy pt-[var(--nav-h)]">
      {/* architectural photograph (placeholder art) */}
      <Image
        src="/images/hero-dubai.svg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      {/* navy wash for legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/80 to-navy/30" />
      <div className="absolute inset-0 -z-10 bg-navy/20" />
      {/* subtle grid lines */}
      <div className="arch-grid absolute inset-y-0 left-0 -z-10 w-full max-w-3xl opacity-60" />

      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="max-w-2xl">
          <p className="label text-teal">{company.tagline.replace(/·/g, '·')}</p>

          <h1 className="mt-6 text-[2.15rem] leading-[1.1] text-off sm:text-[2.6rem] lg:text-[2.85rem]">
            Engineering Better Spaces.
            <br />
            <span className="text-teal">Maintaining What Matters.</span>
          </h1>

          <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-off/75">
            Professional building maintenance, MEP, finishing and installation solutions for
            residential, commercial and industrial properties across Dubai.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-teal px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-teal-bright"
            >
              Get a Free Quote
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 border border-off/30 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-off transition-colors hover:border-teal hover:text-teal"
            >
              Explore Services
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <a
            href={company.phoneHref}
            className="mt-8 inline-flex items-center gap-2.5 text-off/80 transition-colors hover:text-off"
          >
            <Phone size={16} className="text-teal" />
            <span className="font-mono text-sm">{company.phone}</span>
          </a>
        </div>

        {/* floating glass stat card */}
        <div className="self-start justify-self-start lg:mt-4 lg:justify-self-end">
          <div className="w-[18rem] rounded-[12px] border border-white/15 bg-navy/55 p-7 backdrop-blur-md">
            <ul className="divide-y divide-white/10">
              {heroStats.map((stat) => {
                const Icon = icons[stat.icon];
                return (
                  <li key={stat.label} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[8px] border border-white/15 text-teal">
                      <Icon size={20} />
                    </span>
                    <span>
                      <span className="block font-display text-2xl text-off">{stat.value}</span>
                      <span className="label mt-0.5 block text-off/55">{stat.label}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
