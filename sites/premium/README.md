# Trio Built Gulf — Premium (₹40,000)

Everything in **Professional**, on a server-rendered Next.js platform with a
real quote-submission endpoint.

## Stack

- Next.js 16 (App Router) — server-rendered HTML, `next/image`, generated `robots.txt` / `sitemap.xml`
- One route (`/`) that renders the full one-page site on the server
- `POST /api/quote` — validates a submission and forwards it to a webhook / CRM

## Run

```bash
npm install
cp .env.example .env.local   # then edit
npm run dev                  # http://localhost:3000
```

Build / start:

```bash
npm run build
npm run start
```

## Environment (`.env.local`)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Real domain — feeds metadata, `sitemap.xml`, `robots.txt`. A production build warns if unset. |
| `QUOTE_WEBHOOK_URL` | Where `/api/quote` POSTs each lead (Zapier / Make / CRM inbound hook). Unset = leads are logged to the server console. |
| `QUOTE_NOTIFY_EMAIL` | Passed through in the webhook payload as the notification address. |

## Added over Professional

- **Server-rendered platform** — HTML is produced per request/at build on the server, not assembled in the browser (faster first paint, cleaner crawl).
- **Inbox / CRM-connected form** — `components/QuoteForm.tsx` submits JSON to `/api/quote`; the route validates and delivers to `QUOTE_WEBHOOK_URL`. No email client needed by the visitor.
- **Domain + hosting** — deploy to Vercel (zero config) or any Node host; point the domain and set `NEXT_PUBLIC_SITE_URL`.
- **Full source-code ownership** — this folder is the complete source, handed over on GitHub.
- **Post-launch support** — 30 days.

## Deploy (Vercel)

1. Import the repo, set the project root to `sites/premium`.
2. Add the env vars above.
3. Deploy, then add the custom domain in the Vercel dashboard.
