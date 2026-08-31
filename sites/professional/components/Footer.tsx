import Logo from './Logo';
import { company } from '@/data/site';
import { services } from '@/data/services';

const columns = [
  {
    title: 'Company',
    links: ['About Us', 'Why Choose Us', 'Our Process', 'Careers'],
  },
  {
    title: 'Projects',
    links: ['Commercial', 'Residential', 'Industrial', 'Interior Fit-Outs'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-off/60">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-off/50">
              {company.tagline}. Delivering reliable technical solutions that enhance the value and
              performance of every property.
            </p>
          </div>

          <div>
            <h3 className="label text-teal">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.number}>
                  <a href="#services" className="transition-colors hover:text-off">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="label text-teal">{col.title}</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#about" className="transition-colors hover:text-off">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="label text-teal">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={company.phoneHref} className="font-mono transition-colors hover:text-off">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="font-mono transition-colors hover:text-off">
                  {company.email}
                </a>
              </li>
              <li className="leading-relaxed">
                {company.address.line1}
                <br />
                {company.address.line2}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-off/10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-5 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-mono text-off/50">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="flex gap-5 text-off/50">
            <a href="#" className="transition-colors hover:text-off">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-off">
              Terms &amp; Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
