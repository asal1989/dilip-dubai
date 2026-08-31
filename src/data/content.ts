// Central place for all editable company content.
// Replace copy, numbers, or add project photos here without touching components.

export const company = {
  name: 'Trio Built Gulf Technical Services LLC',
  shortName: 'Trio Built Gulf',
  email: 'triobuiltgulf@gmail.com',
  location: 'Dubai, United Arab Emirates',
  whatsapp: '971522073289',
};

export const team = [
  {
    name: 'Lakshmikandh Ramadas',
    role: 'Operation Manager',
    phone: '+971 52 207 3289',
    phoneHref: 'tel:+971522073289',
  },
  {
    name: 'Dilipkumar Muthaiah',
    role: 'Co-Founder',
    phone: '+971 55 625 4138',
    phoneHref: 'tel:+971556254138',
  },
];

export const primaryPhone = team[0].phone;
export const primaryPhoneHref = team[0].phoneHref;

// Order matches the section order on the page (see page.tsx) so the nav
// reflects the actual scroll order rather than jumping around.
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Team', href: '#team' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

// Service code prefix "SVC" used as a technical-spec-sheet style label —
// ties the service grid back to the blueprint/technical identity.
export const services = [
  {
    code: 'SVC-01',
    title: 'False Ceiling & Light Partitions Installation',
    description: 'Precision-fitted ceiling systems and partition works for commercial and residential interiors.',
    icon: 'LayoutPanelTop',
  },
  {
    code: 'SVC-02',
    title: 'Air-Conditioning, Ventilation & Air Filtration',
    description: 'Installation and upkeep of AC, ventilation and air filtration systems for consistent indoor climate.',
    icon: 'Wind',
  },
  {
    code: 'SVC-03',
    title: 'Systems Installation & Maintenance',
    description: 'General technical systems installed and maintained to keep facilities running smoothly.',
    icon: 'Settings',
  },
  {
    code: 'SVC-04',
    title: 'Painting Contract',
    description: 'Interior and exterior painting works finished to a clean, professional standard.',
    icon: 'PaintRoller',
  },
  {
    code: 'SVC-05',
    title: 'Steel Products Installation & Maintenance',
    description: 'Fabrication-grade installation and upkeep of steel products and structures.',
    icon: 'Wrench',
  },
  {
    code: 'SVC-06',
    title: 'Glass & Aluminium Installation & Maintenance',
    description: 'Glass and aluminium fittings installed and maintained for facades, doors and partitions.',
    icon: 'PanelsTopLeft',
  },
  {
    code: 'SVC-07',
    title: 'Floor & Wall Tiling Works',
    description: 'Tiling for floors and walls across residential, commercial and industrial properties.',
    icon: 'Grid3x3',
  },
  {
    code: 'SVC-08',
    title: 'Plumbing & Sanitary Installations',
    description: 'Plumbing and sanitary systems installed and serviced to a reliable technical standard.',
    icon: 'Droplets',
  },
  {
    code: 'SVC-09',
    title: 'Carpentry & Wood Flooring Works',
    description: 'Carpentry and wood flooring works built and fitted with attention to detail.',
    icon: 'Hammer',
  },
  {
    code: 'SVC-10',
    title: 'Electrical Fittings & Fixtures Repairing & Maintenance',
    description: 'Repair and maintenance of electrical fittings and fixtures for safe, dependable operation.',
    icon: 'Zap',
  },
  {
    code: 'SVC-11',
    title: 'Plaster Works',
    description: 'Plastering works completed to a smooth, durable finish across surfaces.',
    icon: 'Layers',
  },
] as const;

export const whyUs = [
  {
    title: 'Professional Workmanship',
    description: 'Every job is carried out with care and technical discipline, from first inspection to final finish.',
    icon: 'BadgeCheck',
  },
  {
    title: 'Wide Range of Technical Services',
    description: 'One point of contact for MEP, finishing, installation and maintenance work across your property.',
    icon: 'LayoutGrid',
  },
  {
    title: 'Reliable & Responsive Support',
    description: 'Enquiries and callouts are handled promptly, so small issues do not turn into bigger ones.',
    icon: 'PhoneCall',
  },
  {
    title: 'Dubai-Based Service',
    description: 'Based locally in Dubai, with an understanding of the standards UAE properties are held to.',
    icon: 'MapPin',
  },
] as const;

// Placeholder project cards — structured so real photos can be dropped in
// later by replacing the `image` field (currently null).
export const projectCategories = [
  { category: 'Commercial', image: null },
  { category: 'Residential', image: null },
  { category: 'Office', image: null },
  { category: 'Maintenance', image: null },
  { category: 'Interior Works', image: null },
  { category: 'MEP', image: null },
] as const;

export const services_form_options = services.map((s) => s.title);
