import type { IconName } from '@/lib/icons';

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: IconName;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We understand your needs and project requirements.',
    icon: 'ClipboardList',
  },
  {
    number: '02',
    title: 'Site Assessment',
    description: 'Our team inspects and analyzes the site in detail.',
    icon: 'SearchCheck',
  },
  {
    number: '03',
    title: 'Execution',
    description: 'We deliver the work with quality and precision.',
    icon: 'Hammer',
  },
  {
    number: '04',
    title: 'Handover & Support',
    description: 'We ensure complete handover and ongoing support.',
    icon: 'Handshake',
  },
];
