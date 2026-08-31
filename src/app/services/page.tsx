import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Services from '@/components/Services';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'False ceilings, HVAC, MEP, painting, steel, glass & aluminium, tiling, plumbing, carpentry, electrical and plaster works — installation and maintenance across Dubai.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trio Built Gulf"
        title="Technical Services in Dubai"
        subtitle="Eleven installation, maintenance and finishing disciplines, delivered by one partner."
        nextBg="navy"
      />
      <Services />
      <CtaBand />
    </>
  );
}
