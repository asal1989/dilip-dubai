# Trio Built Gulf — three website builds

Three implementations of the Trio Built Gulf Technical Services LLC website, one per
package in `quotations/Website-Branded-Quotation.pdf`. Same content and brand
throughout; the tiers differ in SEO, infrastructure and polish.

| Package | Folder | Stack | Delivered as |
|---|---|---|---|
| **Essential** — ₹12,000 | [`essential/`](essential/) | Static HTML + CSS + vanilla JS, single file | Upload the folder to any host |
| **Professional** — ₹22,000 | [`professional/`](professional/) | Next.js 16 (App Router) — premium reference redesign for **Triad Built Group** | `npm run build` → any Node/static host |
| **Premium** — ₹40,000 | [`premium/`](premium/) | Next.js (App Router, server-rendered) + quote API | `npm run build` → deploy to Vercel / any Node host |

> **Note:** `professional/` has since been rebuilt from a client-supplied reference
> design as a full Next.js app (new brand **Triad Built Group**, sections: Hero,
> Stats, Services, Why Us, Projects, About, Process, CTA, Contact). Its own
> `README.md` documents it. The feature table below reflects the original tier spec.

## Feature coverage (from the quotation)

| Feature | Essential | Professional | Premium |
|---|:--:|:--:|:--:|
| One-page site, all core sections | ✓ | ✓ | ✓ |
| Click-to-call, WhatsApp & email links | ✓ | ✓ | ✓ |
| Quote-request form | Email draft | Email draft | Inbox / CRM-connected (`/api/quote`) |
| Custom brand system (colour, type, icons) | ✓ | ✓ | ✓ |
| Optimised images & fast loading | ✓ | ✓ | ✓ |
| Search-engine tags (title, description, OG) | ✓ | ✓ | ✓ |
| `robots.txt` + `sitemap.xml` | – | ✓ | ✓ (generated) |
| Structured business data (JSON-LD) | – | ✓ | ✓ |
| Accessibility contrast + skip link | – | ✓ | ✓ |
| Responsive across phone / tablet / desktop | – | ✓ | ✓ |
| Load-time optimisation pass | – | ✓ | ✓ |
| Server-rendered platform | – | – | ✓ |
| Domain + hosting configuration | – | – | ✓ (see `premium/README.md`) |
| Full source-code ownership (GitHub) | – | – | ✓ |
| Post-launch support | – | – | 30 days |

## Running each build

- **Essential** — open `essential/index.html`, or `npx serve sites/essential`.
- **Professional / Premium** — `cd sites/<name> && npm install && npm run dev`,
  then open http://localhost:3000.

Before going live, replace every `https://example.com` placeholder with the real
domain (Premium reads it from `NEXT_PUBLIC_SITE_URL`).
