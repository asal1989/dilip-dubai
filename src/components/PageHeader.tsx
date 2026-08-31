import PeakDivider from './PeakDivider';

// Compact navy banner that opens every interior page: clears the fixed
// navbar, states the page title, and (when the section below is cream)
// carries the brand peak-divider motif into it.
export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  nextBg = 'cream',
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  nextBg?: 'cream' | 'navy';
}) {
  return (
    <section className="relative bg-navy">
      <div className="blueprint-grid">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-36 pb-16 sm:pt-40 sm:pb-20">
          <p className="eyebrow text-teal-bright">{eyebrow}</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-cream mt-4 leading-[1.08]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-lg text-cream/70 leading-relaxed">{subtitle}</p>
          )}
        </div>
      </div>
      {nextBg === 'cream' && <PeakDivider from="#0F294A" to="#F4F2E7" />}
    </section>
  );
}
