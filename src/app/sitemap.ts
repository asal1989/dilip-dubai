import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';
import { navLinks } from '@/data/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return navLinks.map(({ href }) => ({
    url: href === '/' ? siteUrl : `${siteUrl}${href}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: href === '/' ? 1 : 0.8,
  }));
}
