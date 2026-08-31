'use client';

import { useEffect, useRef, useState } from 'react';
import TiltCard from '@/components/TiltCard';
import { serviceStats } from '@/data/content';

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reveal = () => setInView(true);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          reveal();
          io.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px 15% 0px' },
    );
    io.observe(el);
    const t = setTimeout(reveal, 900);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, [threshold]);
  return { ref, inView };
}

function CountUp({ target, active }: { target: number; active: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (prefersReducedMotion()) {
      const id = requestAnimationFrame(() => setN(target));
      return () => cancelAnimationFrame(id);
    }
    let raf = 0;
    const start = performance.now();
    const duration = 1100;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);
  return <>{n}</>;
}

// KPI strip under the Services page header. Sits on the same navy as the
// PageHeader above it, so it reads as one block leading into the grid.
export default function ServiceStats() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="bg-navy" aria-label="Trio Built Gulf by the numbers">
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl gap-5 px-5 pb-6 sm:grid-cols-2 sm:px-8 sm:pb-8 lg:grid-cols-4"
      >
        {serviceStats.map((stat, i) => {
          const numeric = /^\d+$/.test(stat.value) ? parseInt(stat.value, 10) : null;
          return (
            <TiltCard key={stat.label} index={i} contentClassName="p-6">
              <span
                className="block font-display text-[3.25rem] font-semibold leading-none text-teal-bright [text-shadow:0_2px_18px_rgba(62,168,147,0.35)]"
                style={{ transform: 'translateZ(22px)' }}
              >
                {numeric !== null ? <CountUp target={numeric} active={inView} /> : stat.value}
              </span>
              <span
                className="mt-4 block font-display text-sm font-semibold text-cream"
                style={{ transform: 'translateZ(14px)' }}
              >
                {stat.label}
              </span>
              <span className="mt-1 block text-xs leading-relaxed text-cream/55">{stat.hint}</span>
              <span
                aria-hidden
                className="pointer-events-none absolute right-5 top-5 font-mono text-[0.62rem] tracking-[0.25em] text-teal-bright/70"
                style={{ transform: 'translateZ(38px)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}
