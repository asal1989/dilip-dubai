const FALLBACK = 'https://example.com';

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK;

if (process.env.NODE_ENV === 'production' && siteUrl === FALLBACK && typeof window === 'undefined') {
  console.warn('[site] NEXT_PUBLIC_SITE_URL is not set — absolute URLs will point at ' + FALLBACK);
}
