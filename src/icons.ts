// Explicit icon registry.
//
// Some components pick icons by name from `src/data/content.ts`, so the icon
// has to be looked up at runtime. Importing the whole lucide-react namespace
// to do that lookup defeats tree-shaking and pulls the entire icon library
// into the bundle, so every icon used anywhere on the site is named here
// instead. Add a new entry whenever you add an `icon` field in content.ts or
// use a new icon in a component.
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Droplets,
  Grid3x3,
  Hammer,
  ImageOff,
  Layers,
  LayoutGrid,
  LayoutPanelTop,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PaintRoller,
  PanelsTopLeft,
  Phone,
  PhoneCall,
  Send,
  Settings,
  User,
  Wind,
  Wrench,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react';

export const icons: Record<string, LucideIcon> = {
  BadgeCheck,
  Droplets,
  Grid3x3,
  Hammer,
  Layers,
  LayoutGrid,
  LayoutPanelTop,
  MapPin,
  PaintRoller,
  PanelsTopLeft,
  PhoneCall,
  Settings,
  Wind,
  Wrench,
  Zap,
};

export {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Droplets,
  Grid3x3,
  Hammer,
  ImageOff,
  Layers,
  LayoutGrid,
  LayoutPanelTop,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PaintRoller,
  PanelsTopLeft,
  Phone,
  PhoneCall,
  Send,
  Settings,
  User,
  Wind,
  Wrench,
  X,
  Zap,
};
