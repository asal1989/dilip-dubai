export interface Project {
  title: string;
  location: string;
  category: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: 'Commercial Office Fit-Out',
    location: 'Dubai, UAE',
    category: 'Interior & MEP',
    image: '/images/project-office.svg',
  },
  {
    title: 'Residential Development',
    location: 'Dubai, UAE',
    category: 'MEP & Maintenance',
    image: '/images/project-residential.svg',
  },
  {
    title: 'Industrial Facility',
    location: 'Dubai Industrial City',
    category: 'Mechanical & Electrical',
    image: '/images/project-industrial.svg',
  },
  {
    title: 'Luxury Villa Project',
    location: 'Dubai, UAE',
    category: 'MEP & Finishing Works',
    image: '/images/project-villa.svg',
  },
];
