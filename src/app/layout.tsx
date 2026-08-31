import type { Metadata } from 'next';
import './globals.css';
import { company } from '@/data/content';

// Set NEXT_PUBLIC_SITE_URL once the real domain is live (see README) — this
// placeholder only affects how absolute URLs (OG images, canonical link)
// resolve, not anything user-visible until then.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Trio Built Gulf Technical Services LLC | Technical Services Dubai',
  description:
    'Trio Built Gulf Technical Services LLC provides professional technical, maintenance, MEP, electrical, plumbing, HVAC, flooring and interior services in Dubai, UAE.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    title: 'Trio Built Gulf Technical Services LLC | Technical Services Dubai',
    description:
      'Professional building maintenance, MEP, finishing and installation solutions for residential, commercial and industrial properties across Dubai.',
    locale: 'en_AE',
  },
};

export const viewport = {
  themeColor: '#0F294A',
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: company.name,
  email: company.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
