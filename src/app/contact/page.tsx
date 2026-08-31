import type { Metadata } from 'next';
import { Suspense } from 'react';
import PageHeader from '@/components/PageHeader';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Request a quote from Trio Built Gulf Technical Services LLC — call, WhatsApp or email, or send the job details through the form.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trio Built Gulf"
        title="Contact Us"
        subtitle="Call, WhatsApp or email — or send the job details through the form below."
        nextBg="navy"
      />
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </>
  );
}
