import type { IconName } from '@/lib/icons';

export interface Stat {
  value: string;
  label: string;
  icon: IconName;
}

// The floating white panel between the hero and services.
export const panelStats: Stat[] = [
  { value: '10+', label: 'Years Experience', icon: 'ShieldCheck' },
  { value: '500+', label: 'Projects', icon: 'Building2' },
  { value: '50+', label: 'Technical Experts', icon: 'Users' },
  { value: '98%', label: 'Client Satisfaction', icon: 'ThumbsUp' },
];

// The dark glass card inside the hero.
export const heroStats: Stat[] = [
  { value: '10+', label: 'Years Experience', icon: 'ShieldCheck' },
  { value: '500+', label: 'Projects Completed', icon: 'Building2' },
  { value: '24/7', label: 'Technical Support', icon: 'Headphones' },
];
