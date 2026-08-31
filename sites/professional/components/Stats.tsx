import { icons } from '@/lib/icons';
import { panelStats } from '@/data/stats';

export default function Stats() {
  return (
    <div className="relative z-10 mx-auto -mt-14 max-w-[1180px] px-5 sm:px-8 lg:-mt-20">
      <div className="grid grid-cols-2 gap-px border border-navy/10 bg-navy/10 shadow-[0_30px_60px_-30px_rgba(7,27,51,0.35)] lg:grid-cols-4">
        {panelStats.map((stat) => {
          const Icon = icons[stat.icon];
          return (
            <div key={stat.label} className="flex items-center gap-4 bg-white px-6 py-7 sm:px-8">
              <Icon size={26} className="shrink-0 text-teal" strokeWidth={1.5} />
              <span>
                <span className="block font-display text-3xl text-navy sm:text-4xl">{stat.value}</span>
                <span className="label mt-1 block text-navy/50">{stat.label}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
