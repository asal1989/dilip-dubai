# Trio Built Gulf — Professional (₹22,000)

Everything in **Essential**, plus the SEO, accessibility and QA layer.

```
professional/
  index.html      markup + inline styles + script (skip link, JSON-LD)
  robots.txt      crawl rules
  sitemap.xml     single-URL sitemap
  assets/         logo variants + favicon
```

## Added over Essential

- **`robots.txt` + `sitemap.xml`** — crawl rules and a sitemap reference
- **Structured business data** — `HomeAndConstructionBusiness` JSON-LD in the page head
  (name, address, phone numbers, area served) for Google's business listing
- **Accessibility** — "Skip to content" link, visible focus rings, and text/background
  contrast raised to meet WCAG AA on the low-opacity labels
- **Responsive** — layout verified at phone (375), tablet (768) and desktop (1180+) widths
- **Load-time pass** — inlined critical CSS, `preconnect` to the font host, `font-display: swap`,
  explicitly sized images, no render-blocking third-party scripts

## Still email-based

The quote form opens an email draft (same as Essential). A server-connected
inbox / CRM form is the Premium tier.

## Before launch

Replace `https://example.com` in `index.html`, `robots.txt` and `sitemap.xml` with
the real domain.
