import { company } from '@/data/site';

// Geometric triad mark + stacked wordmark. `tone` flips it for light vs
// dark backgrounds.
export default function Logo({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const wordmark = tone === 'light' ? 'text-off' : 'text-navy';
  const sub = tone === 'light' ? 'text-off/55' : 'text-navy/50';

  return (
    <span className="flex items-center gap-3">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true" className="shrink-0">
        <path d="M17 2 32 30H2L17 2Z" stroke="var(--color-teal)" strokeWidth="1.6" />
        <path d="M17 11 25 26H9L17 11Z" fill="var(--color-teal)" fillOpacity="0.9" />
        <path d="M17 2v9M9 26l8-15 8 15" stroke="var(--color-off)" strokeOpacity="0.0" strokeWidth="0" />
      </svg>
      <span className="leading-none">
        <span className={`block font-mono text-[0.82rem] font-medium tracking-[0.06em] ${wordmark}`}>
          {company.shortName.toUpperCase()}
        </span>
        <span className={`mt-1 block font-mono text-[0.55rem] tracking-[0.08em] ${sub}`}>
          {company.legalLine.toUpperCase()}
        </span>
      </span>
    </span>
  );
}
