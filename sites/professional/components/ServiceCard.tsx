import { icons } from '@/lib/icons';
import type { Service } from '@/data/services';

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  const ArrowRight = icons.ArrowRight;

  return (
    <a
      href="#contact"
      className="group flex h-full flex-col border border-navy/10 bg-white p-6 transition-colors duration-300 hover:border-teal"
    >
      <span className="font-mono text-xs font-medium tracking-[0.2em] text-teal">
        {service.number}
      </span>
      <Icon
        size={26}
        strokeWidth={1.4}
        className="mt-4 text-teal transition-transform duration-300 group-hover:-translate-y-0.5"
      />
      <h3 className="mt-4 font-sans text-[0.98rem] font-semibold leading-snug text-navy">
        {service.title}
      </h3>
      <p className="mt-2 text-[0.82rem] leading-relaxed text-navy/55">{service.description}</p>
      <ArrowRight
        size={16}
        className="ml-auto mt-5 text-navy/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-teal"
      />
    </a>
  );
}
