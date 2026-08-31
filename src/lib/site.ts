// Single source of truth for the site's public URL.
//
// Set NEXT_PUBLIC_SITE_URL to the real domain in the hosting provider's
// environment (or .env.local for testing) once the site is live. Until then
// absolute URLs (OG images, canonical link, sitemap, robots) resolve against
// the placeholder below.
const FALLBACK_SITE_URL = 'https://example.com';

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL;

if (
  process.env.NODE_ENV === 'production' &&
  siteUrl === FALLBACK_SITE_URL &&
  typeof window === 'undefined'
) {
  console.warn(
    '[site] NEXT_PUBLIC_SITE_URL is not set — sitemap.xml, robots.txt and OpenGraph tags will point at ' +
      FALLBACK_SITE_URL,
  );
}
