import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Projects from '@/components/Projects';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Work across commercial, residential, office, maintenance, interior and MEP projects in Dubai. Project photography coming soon.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trio Built Gulf"
        title="Projects"
        subtitle="Work across every property type in Dubai."
        nextBg="cream"
      />
      <Projects />
      <CtaBand />
    </>
  );
}
