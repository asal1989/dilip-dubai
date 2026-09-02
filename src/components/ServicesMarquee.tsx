import { services } from '@/data/content';

// Decorative infinite ticker of the service lines, shown on the home page
// between the hero and the closing CTA. The list is rendered twice so the
// CSS translateX(-50%) loop is seamless; the second copy is aria-hidden.
export default function ServicesMarquee() {
  const items = services.map((s) => s.title);

  return (
    <section className="bg-cream border-y border-navy/10 overflow-hidden">
      <div className="marquee-mask py-5">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="flex items-center gap-10 pr-10 shrink-0"
              aria-hidden={copy === 1 || undefined}
            >
              {items.map((title) => (
                <li
                  key={title}
                  className="flex items-center gap-6 whitespace-nowrap font-mono text-xs uppercase tracking-[0.06em] text-navy/70"
                >
                  {title}
                  <span className="text-teal-bright" aria-hidden>
                    &#9670;
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
