export const company = {
  name: 'Triad Built Group Technical Services LLC',
  shortName: 'Triad Built Group',
  legalLine: 'Technical Services LLC',
  tagline: 'Technical Services · Dubai · UAE',
  phone: '+971 52 207 3289',
  phoneHref: 'tel:+971522073289',
  whatsapp: '971522073289',
  email: 'info@triadbuiltgroup.ae',
  address: {
    line1: 'Office 1102, The Binary Tower',
    line2: 'Business Bay, Dubai, UAE',
  },
};

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Team', href: '#team' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export type SocialIconName = 'linkedin' | 'facebook' | 'instagram' | 'whatsapp';

export const socials: { label: string; href: string; icon: SocialIconName }[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
  { label: 'WhatsApp', href: 'https://wa.me/971522073289', icon: 'whatsapp' },
];
