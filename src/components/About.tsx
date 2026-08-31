import { Building2, Droplets, Hammer, Layers, PaintRoller, PanelsTopLeft, Wind, Zap } from '@/icons';

const capabilities = [
  { label: 'MEP', icon: Zap },
  { label: 'Building Maintenance', icon: Building2 },
  { label: 'Interior Works', icon: PanelsTopLeft },
  { label: 'Electrical', icon: Zap },
  { label: 'Plumbing', icon: Droplets },
  { label: 'HVAC', icon: Wind },
  { label: 'Flooring', icon: Layers },
  { label: 'Carpentry', icon: Hammer },
  { label: 'Glass & Aluminium', icon: PanelsTopLeft },
  { label: 'Painting', icon: PaintRoller },
  { label: 'Plaster Works', icon: Layers },
];

export default function About() {
  return (
    <section id="about" className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow text-teal">About Us</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mt-4 leading-tight">
              One Trusted Partner for Your Technical Needs
            </h2>
            <p className="mt-6 text-ink/70 leading-relaxed">
              Trio Built Gulf Technical Services LLC provides technical, maintenance, installation
              and finishing solutions for properties across Dubai. We work across residential,
              commercial and industrial spaces &mdash; bringing MEP, interior and general technical
              works under one point of contact.
            </p>
            <p className="mt-4 text-ink/70 leading-relaxed">
              Our team is set up to handle both planned works and responsive maintenance, so
              whatever a space needs to keep running smoothly, it is covered.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-sm border border-navy/10 bg-white/60 p-6 sm:p-8">
              <p className="eyebrow text-navy/70 mb-5">Capabilities</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {capabilities.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-sm bg-navy/[0.03] px-4 py-3.5 hover:bg-teal/[0.08] transition-colors"
                  >
                    <Icon size={18} className="text-teal shrink-0" />
                    <span className="text-sm text-navy font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
