import { serviceStats } from '@/data/content';

// KPI strip under the Services page header. Sits on the same navy as the
// PageHeader above it, so it reads as one block leading into the grid.
export default function ServiceStats() {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pb-4 sm:pb-6">
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-sm border border-cream/10 bg-cream/[0.03] p-6"
            >
              <dd className="font-display text-4xl font-semibold text-teal-bright leading-none">
                {stat.value}
              </dd>
              <dt className="mt-3 font-display text-sm font-semibold text-cream">{stat.label}</dt>
              <p className="mt-1 text-xs text-cream/55 leading-relaxed">{stat.hint}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
