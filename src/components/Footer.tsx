import Image from 'next/image';
import { Mail, MapPin, Phone } from '@/icons';
import logo from '@/assets/logo-on-dark.png';
import { company, navLinks, services, team } from '@/data/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-cream/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src={logo} alt={company.name} className="h-16 w-auto mb-4" />
          <p className="text-sm leading-relaxed text-cream/55">{company.location}</p>
        </div>

        <div>
          <h4 className="eyebrow text-teal-bright mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm hover:text-teal-bright transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-teal-bright mb-4">Services</h4>
          <ul className="flex flex-col gap-2.5">
            {services.slice(0, 6).map((s) => (
              <li key={s.code} className="text-sm text-cream/55">
                {s.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-teal-bright mb-4">Contact</h4>
          <ul className="flex flex-col gap-3">
            {team.map((m) => (
              <li key={m.phoneHref}>
                <a href={m.phoneHref} className="flex items-center gap-2 text-sm hover:text-teal-bright transition-colors">
                  <Phone size={14} className="shrink-0" /> {m.phone}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${company.email}`} className="flex items-center gap-2 text-sm hover:text-teal-bright transition-colors">
                <Mail size={14} className="shrink-0" /> {company.email}
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-cream/55">
              <MapPin size={14} className="shrink-0" /> {company.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-display text-sm font-semibold text-cream/80">
            TRIO BUILT GULF <span className="text-cream/60 font-normal">TECHNICAL SERVICES LLC</span>
          </p>
          <p className="text-xs text-cream/60 font-mono text-center">
            &copy; {year} Trio Built Gulf Technical Services LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
