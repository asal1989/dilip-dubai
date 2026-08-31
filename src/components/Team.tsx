import { Mail, Phone, User } from '@/icons';
import { company, team } from '@/data/content';

export default function Team() {
  return (
    <section id="team" className="bg-navy relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-teal-bright">Our Team</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mt-4 leading-tight">
            The People Behind the Work
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-6 max-w-3xl">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-sm border border-cream/10 bg-cream/[0.03] p-7 text-center sm:text-left"
            >
              <div className="mx-auto sm:mx-0 flex h-20 w-20 items-center justify-center rounded-full bg-teal/15 border border-teal-bright/30 text-teal-bright">
                <User size={32} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-cream">{member.name}</h3>
              <p className="mt-1 eyebrow text-teal-bright">{member.role}</p>

              <div className="mt-5 flex flex-col gap-2 items-center sm:items-start">
                <a
                  href={member.phoneHref}
                  className="inline-flex items-center gap-2 font-mono text-sm text-cream/75 hover:text-teal-bright transition-colors"
                >
                  <Phone size={14} /> {member.phone}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-2 font-mono text-sm text-cream/75 hover:text-teal-bright transition-colors"
                >
                  <Mail size={14} /> {company.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
