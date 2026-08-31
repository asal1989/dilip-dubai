import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import WhyChooseUs from '@/components/WhyChooseUs';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Why Choose Us',
  description:
    'Professional workmanship, a wide range of technical services, responsive support and local Dubai knowledge — why property owners choose Trio Built Gulf.',
};

export default function WhyUsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trio Built Gulf"
        title="Why Choose Trio Built Gulf"
        subtitle="What you can count on from first inspection to final finish."
        nextBg="cream"
      />
      <WhyChooseUs />
      <CtaBand />
    </>
  );
}
