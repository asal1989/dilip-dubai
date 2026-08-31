import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Team from '@/components/Team';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'The people behind Trio Built Gulf Technical Services LLC — reach the operations manager or co-founder directly.',
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trio Built Gulf"
        title="Meet the Team"
        subtitle="Direct lines to the people who run the work."
        nextBg="navy"
      />
      <Team />
      <CtaBand />
    </>
  );
}
