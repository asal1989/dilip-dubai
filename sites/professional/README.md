# Triad Built Group — Professional (redesign)

Premium one-page site for **Triad Built Group Technical Services LLC**, Dubai —
rebuilt from a reference design as a Next.js App Router application.

## Stack

- Next.js 16.3.3 (App Router, Turbopack) · React 19.2.8 · TypeScript 5 (strict)
- Tailwind CSS v4 (`@tailwindcss/postcss`) + tokens/utilities in `app/globals.css`
- `lucide-react` via the `lib/icons.ts` registry
- Google Fonts: Fraunces (display) · Inter (body) · IBM Plex Mono (labels)
- `next/image` for all imagery

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run start
```

## Structure

```
app/            layout (Navbar + Footer + JSON-LD), page (section order), robots, sitemap
components/     Navbar Hero Stats Services ServiceCard WhyUs Projects ProjectCard
               About Process CTA Contact Footer  +  Logo Reveal
data/          site services projects stats whyus process   (typed arrays)
lib/icons.ts   explicit lucide registry
public/images/ SVG architectural placeholders — swap for real photos before launch
```

Section order: Navbar → Hero → Stats → Services → Why Us → Projects → About →
Process → CTA → Contact → Footer.

## Before launch

- Replace every `/public/images/*.svg` placeholder with real photography
  (jpg/webp). Once none are SVG, delete the `images` block in `next.config.ts`.
- Set `NEXT_PUBLIC_SITE_URL` to the real domain.
- The quote form opens a pre-filled email to `info@triadbuiltgroup.ae`
  (Professional tier = email-based). Wire to an inbox/CRM for the Premium tier.
