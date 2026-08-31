import Link from 'next/link';
import { ArrowRight, Phone } from '@/icons';
import { primaryPhone, primaryPhoneHref } from '@/data/content';

// Closing call-to-action used at the foot of the home page and any interior
// page that should push toward a quote.
export default function CtaBand() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
        <div className="rounded-sm border border-navy/10 bg-white/60 px-6 py-12 sm:px-12 sm:py-14 text-center">
          <p className="eyebrow text-teal">Ready When You Are</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mt-4 leading-tight">
            Tell Us What Your Property Needs
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-ink/70 leading-relaxed">
            Planned works or a callout that can&rsquo;t wait — send the details and we&rsquo;ll come
            back with a clear quote.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-sm bg-teal px-7 py-3.5 font-display text-sm font-semibold tracking-wide text-cream hover:bg-teal-bright transition-colors"
            >
              GET A FREE QUOTE
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={primaryPhoneHref}
              className="inline-flex items-center gap-2 rounded-sm border border-navy/25 px-7 py-3.5 font-display text-sm font-semibold tracking-wide text-navy hover:border-teal hover:text-teal transition-colors"
            >
              <Phone size={16} />
              {primaryPhone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
