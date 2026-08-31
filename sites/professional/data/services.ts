import type { IconName } from '@/lib/icons';

export interface Service {
  number: string;
  title: string;
  description: string;
  icon: IconName;
}

export const services: Service[] = [
  {
    number: '01',
    title: 'MEP Services',
    description: 'Complete mechanical, electrical and plumbing solutions.',
    icon: 'Wrench',
  },
  {
    number: '02',
    title: 'HVAC & Air Conditioning',
    description: 'Installation, maintenance and repair of all HVAC systems.',
    icon: 'Snowflake',
  },
  {
    number: '03',
    title: 'Electrical Works',
    description: 'High-quality electrical installations and maintenance.',
    icon: 'Zap',
  },
  {
    number: '04',
    title: 'Plumbing',
    description: 'Advanced plumbing solutions for all types of properties.',
    icon: 'Droplets',
  },
  {
    number: '05',
    title: 'Painting & Finishing',
    description: 'Professional painting, finishing and surface preparation.',
    icon: 'PaintRoller',
  },
  {
    number: '06',
    title: 'Glass & Aluminium',
    description: 'Supply, installation and maintenance of glass and aluminium works.',
    icon: 'AppWindow',
  },
  {
    number: '07',
    title: 'Steel Works',
    description: 'Structural steel fabrication and installation solutions.',
    icon: 'Frame',
  },
  {
    number: '08',
    title: 'Flooring & Wall Tiling',
    description: 'Premium floor and wall tiling works with perfect finishing.',
    icon: 'Grid3x3',
  },
];
