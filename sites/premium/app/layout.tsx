import type { Metadata, Viewport } from 'next';
import './globals.css';
import { company, primaryPhone } from '@/data/content';
import { siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Trio Built Gulf Technical Services LLC | Technical Services Dubai',
  description:
    'Trio Built Gulf Technical Services LLC provides professional technical, maintenance, MEP, electrical, plumbing, HVAC, flooring and interior services in Dubai, UAE.',
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.png', shortcut: '/favicon.png', apple: '/favicon.png' },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    title: 'Trio Built Gulf Technical Services LLC | Technical Services Dubai',
    description:
      'Professional building maintenance, MEP, finishing and installation solutions for residential, commercial and industrial properties across Dubai.',
  },
};

export const viewport: Viewport = { themeColor: '#0F294A' };

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: company.name,
  description:
    'Professional technical, maintenance, MEP, electrical, plumbing, HVAC, flooring and interior services in Dubai, UAE.',
  email: company.email,
  telephone: primaryPhone,
  url: siteUrl,
  areaServed: { '@type': 'City', name: 'Dubai' },
  address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
