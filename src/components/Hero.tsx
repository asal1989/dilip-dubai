import Image from 'next/image';
import { ArrowRight, Phone } from '@/icons';
import logoMark from '@/assets/logo-mark.png';
import { primaryPhone, primaryPhoneHref } from '@/data/content';
import PeakDivider from './PeakDivider';

export default function Hero() {
  return (
    <section id="home" className="relative bg-navy pt-20">
      <div className="relative overflow-hidden blueprint-grid">
        {/* watermark mark */}
        <Image
          src={logoMark}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute -right-24 top-1/2 -translate-y-1/2 w-[520px] max-w-none opacity-[0.07] sm:opacity-10"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32 lg:py-36">
          <div className="max-w-3xl">
            <p className="eyebrow text-teal-bright mb-6 animate-[fadeUp_0.7s_ease_forwards] opacity-0" style={{ animationDelay: '0.05s' }}>
              Technical Services · Dubai, UAE
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-semibold text-cream animate-[fadeUp_0.7s_ease_forwards] opacity-0"
              style={{ animationDelay: '0.15s' }}
            >
              Reliable Technical Services for Modern Spaces.
            </h1>
            <p
              className="mt-6 text-lg text-cream/75 max-w-xl leading-relaxed animate-[fadeUp_0.7s_ease_forwards] opacity-0"
              style={{ animationDelay: '0.28s' }}
            >
              Professional building maintenance, MEP, finishing and installation solutions for
              residential, commercial and industrial properties across Dubai.
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-4 animate-[fadeUp_0.7s_ease_forwards] opacity-0"
              style={{ animationDelay: '0.4s' }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-sm bg-teal px-7 py-3.5 font-display text-sm font-semibold tracking-wide text-cream hover:bg-teal-bright transition-colors"
              >
                GET A FREE QUOTE
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={primaryPhoneHref}
                className="inline-flex items-center gap-2 rounded-sm border border-cream/25 px-7 py-3.5 font-display text-sm font-semibold tracking-wide text-cream hover:border-teal-bright hover:text-teal-bright transition-colors"
              >
                <Phone size={16} />
                CALL US
              </a>
            </div>

            <p
              className="mt-8 font-mono text-sm text-cream/60 animate-[fadeUp_0.7s_ease_forwards] opacity-0"
              style={{ animationDelay: '0.5s' }}
            >
              {primaryPhone}
            </p>
          </div>
        </div>
      </div>

      <PeakDivider from="#0F294A" to="#F4F2E7" />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
