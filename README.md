# Trio Built Gulf Technical Services LLC — Website (Next.js)

A Next.js (App Router, TypeScript) + Tailwind CSS v4 port of the Trio Built Gulf Technical Services LLC website. Same design, content and brand as the original Vite build in `../trio-built-gulf`, moved onto Next.js for built-in SEO metadata, image optimization, and static export or Vercel hosting.

## What's inside

- `src/app/page.tsx` — page layout (assembles all sections)
- `src/app/layout.tsx` — root layout, page `<title>`/meta description, OpenGraph tags, theme color and favicon
- `src/components/` — one file per section (Navbar, Hero, About, Services, WhyChooseUs, Team, Projects, Contact, Footer). `Navbar.tsx` and `Contact.tsx` are client components (`'use client'`) because they use `useState`/`useEffect` and browser events; everything else renders on the server.
- `src/data/content.ts` — **all editable text lives here**: company details, phone numbers, the 11 services, team members, "Why Choose Us" cards, and project category placeholders. Edit this file to update copy without touching any component.
- `src/icons.ts` — explicit registry of every lucide icon the site uses. `Services.tsx` and `WhyChooseUs.tsx` pick icons by name from `content.ts`, so this map is what lets the bundler tree-shake the ~1,800 icons the site doesn't use. **Add an entry here whenever you add a new `icon` field in `content.ts`**, or a new icon silently falls back to the section's default.
- `src/assets/` — logo (background removed, transparent PNG) and the cropped logo mark used as the hero watermark, both sized for how they're displayed and rendered through `next/image`.
- `src/assets/source/` — full-resolution originals and the two business card images. Nothing here is imported by the site, so it never enters the build; kept as brand source material for print or future reuse.
- `src/app/globals.css` — brand colors, fonts, and the angular "peak divider" motif used between sections.

## Running it locally

```bash
npm install
npm run dev
```

Then open the local URL Next.js prints (usually `http://localhost:3000`).

## Building for deployment

```bash
npm run build
npm run start
```

This is a standard Next.js server build — deploy to Vercel, or any Node host. If you need a static export instead (no server, upload `out/` anywhere), add `output: 'export'` to `next.config.ts`; note this disables `next/image`'s on-demand optimization unless you configure a loader.

## Things to plug in later

- **Project photos**: open `src/data/content.ts`, find `projectCategories`, and set each `image` field to an imported photo path. The card layout in `src/components/Projects.tsx` will pick it up automatically and the placeholder disappears.
- **Team photos**: if you'd like real photos instead of the placeholder avatar icons, add images and swap the icon in `src/components/Team.tsx`.
- **Quote form**: the "Request a Quote" form currently opens a pre-filled email draft to triobuiltgulf@gmail.com (no backend needed). If you'd rather have submissions land directly in an inbox or CRM without opening the visitor's email app, connect the form to a form-handling service or a Next.js Route Handler — say the word and this can be wired up.
- **Real domain**: `src/lib/site.ts` reads the site's public URL from the `NEXT_PUBLIC_SITE_URL` environment variable (used by `layout.tsx`, `robots.ts` and `sitemap.ts`), falling back to `https://example.com` if it isn't set — a production build without it prints a warning. Once the site has a real domain, set `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` in your hosting provider's environment variables (or a local `.env.local` for testing) so OpenGraph links, the sitemap and `robots.txt` point at the right place.

## Brand reference

Colors, typography and the logo were taken directly from the attached logo and business cards:

- Navy `#0F294A`
- Teal `#2E8073`
- Cream `#F4F2E7`

Do not distort or recolor the logo file (`src/assets/logo.png`) — it's already been background-cleaned and is ready to use as-is. The copies in `src/assets/` are proportionally downscaled to their display size for page-load speed; the untouched 640px originals are in `src/assets/source/` if you need them for print or larger placements.

**Two logo variants**: `logo.png` has the "TRIO BUILT GULF" wordmark in navy — use it on light backgrounds. `logo-on-dark.png` has that same wordmark recolored to cream (the teal triangle and teal "TECHNICAL SERVICES LLC" subtext are untouched) for use on navy backgrounds, where the navy wordmark is otherwise unreadable. `Navbar.tsx` and `Footer.tsx` use `logo-on-dark.png`; reach for `logo.png` if you add the logo anywhere on a light (cream/white) section.
