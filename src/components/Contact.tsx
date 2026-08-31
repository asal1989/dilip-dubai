'use client';

import { useEffect, useState } from 'react';
import { Mail, MapPin, MessageCircle, Phone, Send } from '@/icons';
import { company, servicesFormOptions, team } from '@/data/content';

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', email: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const { detail } = e as CustomEvent<string>;
      setForm((f) => ({ ...f, service: detail }));
    };
    window.addEventListener('prefill-service', handler);
    return () => window.removeEventListener('prefill-service', handler);
  }, []);

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote Request — ${form.service || 'General Enquiry'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService Required: ${form.service}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="bg-navy">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-teal-bright">Contact Us</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mt-4 leading-tight">
            Request a Quote
          </h2>
          <p className="mt-4 text-cream/65 leading-relaxed">
            Tell us what your property needs and we&rsquo;ll get back to you.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-10">
          {/* Contact details + quick actions */}
          <div className="lg:col-span-5">
            <div className="rounded-sm border border-cream/10 bg-cream/[0.03] p-7">
              <h3 className="font-display text-lg font-semibold text-cream">{company.name}</h3>

              <div className="mt-6 flex items-start gap-3">
                <MapPin size={18} className="text-teal-bright mt-0.5 shrink-0" />
                <span className="text-sm text-cream/75">{company.location}</span>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                {team.map((m) => (
                  <a
                    key={m.phoneHref}
                    href={m.phoneHref}
                    className="flex items-center gap-3 text-sm text-cream/75 hover:text-teal-bright transition-colors"
                  >
                    <Phone size={17} className="text-teal-bright shrink-0" />
                    <span className="font-mono">{m.phone}</span>
                    <span className="text-cream/60">&middot; {m.role}</span>
                  </a>
                ))}
              </div>

              <a
                href={`mailto:${company.email}`}
                className="mt-4 flex items-center gap-3 text-sm text-cream/75 hover:text-teal-bright transition-colors"
              >
                <Mail size={17} className="text-teal-bright shrink-0" />
                <span className="font-mono">{company.email}</span>
              </a>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={team[0].phoneHref}
                  className="flex items-center justify-center gap-2 rounded-sm bg-cream/10 py-3 text-sm font-display font-semibold text-cream hover:bg-cream/15 transition-colors"
                >
                  <Phone size={16} /> Call
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-sm bg-teal py-3 text-sm font-display font-semibold text-cream hover:bg-teal-bright transition-colors"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center justify-center gap-2 rounded-sm bg-cream/10 py-3 text-sm font-display font-semibold text-cream hover:bg-cream/15 transition-colors"
                >
                  <Mail size={16} /> Email
                </a>
              </div>
            </div>
          </div>

          {/* Quote form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="rounded-sm border border-cream/10 bg-cream/[0.03] p-7 grid gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name">
                  <input
                    required
                    value={form.name}
                    onChange={update('name')}
                    type="text"
                    name="name"
                    autoComplete="name"
                    className="field-input"
                    placeholder="Your full name"
                  />
                </Field>
                <Field label="Phone">
                  <input
                    required
                    value={form.phone}
                    onChange={update('phone')}
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    className="field-input"
                    placeholder="+971 ..."
                  />
                </Field>
              </div>

              <Field label="Email">
                <input
                  required
                  value={form.email}
                  onChange={update('email')}
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="field-input"
                  placeholder="you@email.com"
                />
              </Field>

              <Field label="Service Required">
                <select name="service" value={form.service} onChange={update('service')} className="field-input">
                  <option value="">Select a service</option>
                  {servicesFormOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </Field>

              <Field label="Message">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={update('message')}
                  rows={4}
                  className="field-input resize-none"
                  placeholder="Tell us a bit about the job"
                />
              </Field>

              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-sm bg-teal px-7 py-3.5 font-display text-sm font-semibold tracking-wide text-cream hover:bg-teal-bright transition-colors"
              >
                <Send size={16} />
                REQUEST A QUOTE
              </button>

              {sent && (
                <p className="text-sm text-teal-bright font-mono">
                  Your email app should now be open with the details filled in &mdash; send it across and we&rsquo;ll be in touch.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow text-cream/65 block mb-2">{label}</span>
      {children}
    </label>
  );
}
