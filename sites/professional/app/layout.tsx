import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { company } from '@/data/site';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://triadbuiltgroup.ae';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Triad Built Group Technical Services LLC | MEP & Technical Services Dubai',
  description:
    'Dubai-based technical services provider delivering MEP, HVAC, electrical, plumbing, finishing and maintenance solutions for residential, commercial and industrial properties.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    title: 'Triad Built Group Technical Services LLC',
    description:
      'Engineering better spaces and maintaining what matters — MEP, finishing and maintenance solutions across Dubai.',
  },
};

export const viewport: Viewport = { themeColor: '#071B33' };

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: company.name,
  description:
    'Dubai-based technical services provider delivering MEP, HVAC, electrical, plumbing, finishing and maintenance solutions.',
  email: company.email,
  telephone: company.phone,
  url: siteUrl,
  areaServed: { '@type': 'City', name: 'Dubai' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.line1,
    addressLocality: 'Business Bay, Dubai',
    addressCountry: 'AE',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
