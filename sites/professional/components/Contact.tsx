'use client';

import { useState } from 'react';
import { icons } from '@/lib/icons';
import SocialIcon from './SocialIcon';
import { company, socials } from '@/data/site';
import { services } from '@/data/services';

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const EMPTY: FormState = { name: '', email: '', phone: '', service: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [sent, setSent] = useState(false);

  const Phone = icons.Phone;
  const Mail = icons.Mail;
  const MapPin = icons.MapPin;
  const ArrowRight = icons.ArrowRight;

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Service request — ${form.service || 'General enquiry'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`,
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-off py-24 sm:py-28">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 text-navy/[0.06] xl:block"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="100" cy="100" r="80" />
        <circle cx="100" cy="100" r="52" />
        <path d="M20 100h160M100 20v160M41 41l118 118M159 41L41 159" />
        <rect x="72" y="72" width="56" height="56" />
      </svg>
      <div className="relative mx-auto grid max-w-[1280px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="label text-teal">Get in Touch</p>
          <p className="mt-5 max-w-sm text-[0.98rem] leading-relaxed text-navy/65">
            We are here to help you with all your technical service needs.
          </p>

          <ul className="mt-9 space-y-5">
            <li className="flex items-start gap-3.5">
              <Phone size={18} className="mt-0.5 shrink-0 text-teal" />
              <a href={company.phoneHref} className="font-mono text-sm text-navy/75 hover:text-teal">
                {company.phone}
              </a>
            </li>
            <li className="flex items-start gap-3.5">
              <Mail size={18} className="mt-0.5 shrink-0 text-teal" />
              <a href={`mailto:${company.email}`} className="font-mono text-sm text-navy/75 hover:text-teal">
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-3.5">
              <MapPin size={18} className="mt-0.5 shrink-0 text-teal" />
              <span className="text-sm leading-relaxed text-navy/75">
                {company.address.line1}
                <br />
                {company.address.line2}
              </span>
            </li>
          </ul>

          <ul className="mt-9 flex gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center bg-teal text-white transition-colors hover:bg-teal-bright"
                >
                  <SocialIcon name={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="border border-navy/10 bg-white p-7 sm:p-9">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Your Name">
              <input required value={form.name} onChange={update('name')} type="text" autoComplete="name" className="tf" placeholder="Full name" />
            </Field>
            <Field label="Your Email">
              <input required value={form.email} onChange={update('email')} type="email" autoComplete="email" className="tf" placeholder="you@email.com" />
            </Field>
            <Field label="Phone Number">
              <input required value={form.phone} onChange={update('phone')} type="tel" autoComplete="tel" className="tf" placeholder="+971 ..." />
            </Field>
            <Field label="Service">
              <select value={form.service} onChange={update('service')} className="tf">
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s.number} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>
            </Field>
          </div>
          <div className="mt-5">
            <Field label="Message">
              <textarea value={form.message} onChange={update('message')} rows={4} className="tf resize-none" placeholder="Tell us about your property and requirements" />
            </Field>
          </div>

          <button
            type="submit"
            className="group mt-6 inline-flex items-center gap-2 bg-teal px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-teal-bright"
          >
            Submit Request
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </button>

          {sent && (
            <p className="mt-4 font-mono text-xs text-teal">
              Your email app should now be open with the details filled in — send it and we&rsquo;ll
              reply shortly.
            </p>
          )}
        </form>
      </div>

      <style>{`
        .tf {
          width: 100%;
          border: 1px solid color-mix(in srgb, var(--color-navy) 15%, transparent);
          background: #fff;
          padding: 0.7rem 0.85rem;
          font-size: 0.9rem;
          color: var(--color-ink);
          font-family: var(--font-sans);
        }
        .tf::placeholder { color: color-mix(in srgb, var(--color-navy) 35%, transparent); }
        .tf:focus { outline: none; border-color: var(--color-teal); }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="label mb-2 block text-navy/55">{label}</span>
      {children}
    </label>
  );
}
