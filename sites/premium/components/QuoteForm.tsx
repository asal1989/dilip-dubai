'use client';

import { useEffect, useState } from 'react';
import { services } from '@/data/content';

type Status = { kind: 'idle' | 'sending' | 'ok' | 'err'; message?: string };

const OPTIONS = services.map((s) => s.title);

export default function QuoteForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  // Prefill the service when a "Enquire Now" link is clicked (delegated so the
  // service grid can stay a server component).
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.('a[data-service]') as HTMLElement | null;
      if (!target) return;
      const value = target.getAttribute('data-service') ?? '';
      setForm((f) => ({ ...f, service: OPTIONS.includes(value) ? value : 'Other' }));
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const set =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ kind: 'sending' });
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (data.ok) {
        setStatus({ kind: 'ok', message: 'Thanks — your request is in. We’ll be in touch shortly.' });
        setForm({ name: '', phone: '', email: '', service: '', message: '' });
      } else {
        setStatus({ kind: 'err', message: data.error ?? 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ kind: 'err', message: 'Network error. Please call or WhatsApp us instead.' });
    }
  }

  return (
    <form className="quote" onSubmit={onSubmit}>
      <div className="two">
        <label>
          <span>Name</span>
          <input className="field" type="text" required autoComplete="name" placeholder="Your full name" value={form.name} onChange={set('name')} />
        </label>
        <label>
          <span>Phone</span>
          <input className="field" type="tel" required autoComplete="tel" placeholder="+971 ..." value={form.phone} onChange={set('phone')} />
        </label>
      </div>
      <label>
        <span>Email</span>
        <input className="field" type="email" required autoComplete="email" placeholder="you@email.com" value={form.email} onChange={set('email')} />
      </label>
      <label>
        <span>Service Required</span>
        <select className="field" value={form.service} onChange={set('service')}>
          <option value="">Select a service</option>
          {OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </label>
      <label>
        <span>Message</span>
        <textarea className="field" rows={4} placeholder="Tell us a bit about the job" style={{ resize: 'none' }} value={form.message} onChange={set('message')} />
      </label>
      <button className="btn btn-primary" type="submit" disabled={status.kind === 'sending'}>
        {status.kind === 'sending' ? 'SENDING…' : '✉ REQUEST A QUOTE'}
      </button>
      {status.message && (
        <p className={`form-status ${status.kind === 'ok' ? 'ok' : 'err'}`} role="status">
          {status.message}
        </p>
      )}
    </form>
  );
}
