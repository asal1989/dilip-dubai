import { NextResponse } from 'next/server';

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  const name = (body.name ?? '').trim();
  const phone = (body.phone ?? '').trim();
  const email = (body.email ?? '').trim();
  const service = (body.service ?? '').trim();
  const message = (body.message ?? '').trim();

  const errors: string[] = [];
  if (name.length < 2) errors.push('name');
  if (phone.length < 6) errors.push('phone');
  if (!EMAIL_RE.test(email)) errors.push('email');
  if (errors.length) {
    return NextResponse.json(
      { ok: false, error: `Please check: ${errors.join(', ')}.` },
      { status: 422 },
    );
  }

  const lead = {
    name,
    phone,
    email,
    service: service || 'General Enquiry',
    message,
    receivedAt: new Date().toISOString(),
    source: 'website:premium',
  };

  const webhook = process.env.QUOTE_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...lead, notify: process.env.QUOTE_NOTIFY_EMAIL }),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error('[quote] webhook delivery failed:', err);
      return NextResponse.json(
        { ok: false, error: 'Could not submit right now. Please call or WhatsApp us.' },
        { status: 502 },
      );
    }
  } else {
    // No CRM/webhook configured yet — log so nothing is lost in development.
    console.info('[quote] new lead (no QUOTE_WEBHOOK_URL set):', lead);
  }

  return NextResponse.json({ ok: true });
}
