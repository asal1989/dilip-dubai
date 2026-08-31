import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import About from '@/components/About';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Trio Built Gulf Technical Services LLC brings MEP, interior, finishing and general technical works for Dubai properties under one point of contact.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trio Built Gulf"
        title="About Trio Built Gulf"
        subtitle="A single technical services partner for planned works and responsive maintenance across Dubai."
        nextBg="cream"
      />
      <About />
      <CtaBand />
    </>
  );
}
