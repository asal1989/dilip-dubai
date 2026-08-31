import { icons } from '@/icons';
import { whyUs } from '@/data/content';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-teal">Why Choose Us</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mt-4 leading-tight">
            Built Around Dependability
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyUs.map(({ title, description, icon }) => {
            const Icon = icons[icon] ?? icons.BadgeCheck;
            return (
              <div
                key={title}
                className="relative rounded-sm bg-white border border-navy/8 p-6 pt-8"
              >
                <span className="absolute top-0 left-6 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-sm bg-navy text-teal-bright">
                  <Icon size={19} />
                </span>
                <h3 className="font-display text-base font-semibold text-navy leading-snug mt-2">
                  {title}
                </h3>
                <p className="mt-3 text-sm text-ink/65 leading-relaxed">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
