'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

// Premium "glass" card with a gradient hairline border, a pointer-tracked
// glow, a diagonal sheen, a lift-on-hover shadow, and a subtle 3D tilt that
// follows the cursor. Fades + rotates into view on scroll, staggered by
// `index`. All motion is skipped under prefers-reduced-motion.
export default function TiltCard({
  children,
  index = 0,
  className = '',
  contentClassName = 'p-6',
  maxTilt = 15,
}: {
  children: ReactNode;
  index?: number;
  className?: string;
  contentClassName?: string;
  maxTilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [active, setActive] = useState(false);

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
      { threshold: 0.15, rootMargin: '0px 0px 15% 0px' },
    );
    io.observe(el);
    // Safety net: never leave a card stuck invisible if the observer misfires.
    const t = setTimeout(reveal, 900);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setTilt({ ry: (px - 0.5) * 2 * maxTilt, rx: -(py - 0.5) * 2 * maxTilt });
    el.style.setProperty('--mx', `${px * 100}%`);
    el.style.setProperty('--my', `${py * 100}%`);
  }

  function handleLeave() {
    setActive(false);
    setTilt({ rx: 0, ry: 0 });
  }

  return (
    <div
      ref={ref}
      onMouseEnter={() => setActive(true)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`group relative h-full [transform-style:preserve-3d] will-change-transform motion-reduce:!transform-none motion-reduce:!opacity-100 ${className}`}
      style={{
        transform: inView
          ? `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateY(0)`
          : 'perspective(1000px) rotateX(-16deg) translateY(26px)',
        opacity: inView ? 1 : 0,
        transitionProperty: 'transform, opacity',
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        transitionDuration: active ? '120ms' : '600ms',
        transitionDelay: inView && !active ? `${index * 80}ms` : '0ms',
      }}
    >
      <div className="h-full rounded-md bg-gradient-to-br from-teal-bright/45 via-cream/10 to-transparent p-px shadow-[0_22px_45px_-26px_rgba(0,0,0,0.75)] transition-shadow duration-500 group-hover:shadow-[0_34px_66px_-20px_rgba(46,128,115,0.5)]">
        <div className={`relative h-full overflow-hidden rounded-[7px] bg-[linear-gradient(160deg,rgba(244,242,231,0.09),rgba(8,26,49,0.42))] backdrop-blur-sm ${contentClassName}`}>
          {/* pointer-tracked glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(320px circle at var(--mx,50%) var(--my,50%), rgba(62,168,147,0.26), transparent 70%)',
            }}
          />
          {/* diagonal sheen */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-12 -top-16 h-24 rotate-12 bg-gradient-to-r from-transparent via-cream/12 to-transparent opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100"
          />
          {/* bottom accent line */}
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-teal-bright/70 via-teal-bright/20 to-transparent"
          />
          <div
            className="relative flex h-full flex-col [transform-style:preserve-3d]"
            style={{ transform: 'translateZ(24px)' }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
