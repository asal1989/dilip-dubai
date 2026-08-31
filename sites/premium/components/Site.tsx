import Image from 'next/image';
import Navbar from './Navbar';
import QuoteForm from './QuoteForm';
import {
  capabilities,
  company,
  navLinks,
  primaryPhone,
  primaryPhoneHref,
  projectCategories,
  services,
  team,
  whyUs,
} from '@/data/content';

const year = new Date().getFullYear();

export default function Site() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />

      <main id="main">
        {/* HERO */}
        <section id="home" className="bg-navy hero" style={{ paddingBottom: 0 }}>
          <div className="blueprint" aria-hidden="true" />
          <Image className="hero-mark" src="/logo-mark.png" alt="" aria-hidden="true" width={520} height={374} />
          <div className="wrap">
            <div className="hero-inner">
              <p className="eyebrow" style={{ color: 'var(--teal-bright)' }}>
                Technical Services · Dubai, UAE
              </p>
              <h1>Reliable Technical Services for Modern Spaces.</h1>
              <p className="lead">
                Professional building maintenance, MEP, finishing and installation solutions for
                residential, commercial and industrial properties across Dubai.
              </p>
              <div className="btn-row">
                <a className="btn btn-primary" href="#contact">
                  GET A FREE QUOTE →
                </a>
                <a className="btn btn-ghost" href={primaryPhoneHref}>
                  CALL US
                </a>
              </div>
              <p className="phone">{primaryPhone}</p>
            </div>
          </div>
          <svg className="peak" viewBox="0 0 1200 64" preserveAspectRatio="none" aria-hidden="true">
            <rect width="1200" height="64" fill="#0F294A" />
            <polygon points="0,64 260,10 520,64" fill="#F4F2E7" />
            <polygon points="480,64 640,0 800,64" fill="#F4F2E7" />
            <polygon points="760,64 980,20 1200,64" fill="#F4F2E7" />
          </svg>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-cream about">
          <div className="wrap about-grid">
            <div>
              <p className="eyebrow" style={{ color: 'var(--teal)' }}>
                About Us
              </p>
              <h2>One Trusted Partner for Your Technical Needs</h2>
              <p>
                Trio Built Gulf Technical Services LLC provides technical, maintenance, installation
                and finishing solutions for properties across Dubai. We work across residential,
                commercial and industrial spaces — bringing MEP, interior and general technical works
                under one point of contact.
              </p>
              <p>
                Our team is set up to handle both planned works and responsive maintenance, so
                whatever a space needs to keep running smoothly, it is covered.
              </p>
            </div>
            <div>
              <div className="capabilities">
                <p className="eyebrow" style={{ color: 'rgba(15,41,74,.7)' }}>
                  Capabilities
                </p>
                <div className="cap-grid">
                  {capabilities.map((c) => (
                    <div className="cap" key={c}>
                      <span className="dot" />
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-navy">
          <div className="wrap">
            <div className="head">
              <p className="eyebrow" style={{ color: 'var(--teal-bright)' }}>
                What We Do
              </p>
              <h2>Complete Technical Services</h2>
              <p>
                A full range of installation, maintenance and finishing works, delivered by one
                technical services partner.
              </p>
            </div>
            <div className="cards">
              {services.map((s) => (
                <article className="card" key={s.code}>
                  <div className="top">
                    <div className="ic">{s.code.split('-')[1]}</div>
                    <span className="code">{s.code}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <a className="enquire" href="#contact" data-service={s.title}>
                    Enquire Now ↗
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section id="why-us" className="bg-cream">
          <div className="wrap">
            <div className="head">
              <p className="eyebrow" style={{ color: 'var(--teal)' }}>
                Why Choose Us
              </p>
              <h2>Built Around Dependability</h2>
            </div>
            <div className="why-grid">
              {whyUs.map((w, i) => (
                <div className="why" key={w.title}>
                  <span className="badge">{i + 1}</span>
                  <h3>{w.title}</h3>
                  <p>{w.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="bg-navy">
          <div className="wrap">
            <div className="head">
              <p className="eyebrow" style={{ color: 'var(--teal-bright)' }}>
                Our Team
              </p>
              <h2>The People Behind the Work</h2>
            </div>
            <div className="team-grid">
              {team.map((m) => (
                <div className="member" key={m.name}>
                  <div className="av">
                    {m.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                  <h3>{m.name}</h3>
                  <p className="role eyebrow">{m.role}</p>
                  <div className="lines">
                    <a href={m.href}>{m.phone}</a>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="bg-cream">
          <div className="wrap">
            <div className="head">
              <p className="eyebrow" style={{ color: 'var(--teal)' }}>
                Projects
              </p>
              <h2>Work Across Every Property Type</h2>
              <p>
                Project photography will be added here. Each card below is wired to a category and
                ready to take a real image.
              </p>
            </div>
            <div className="proj-grid">
              {projectCategories.map((p) => (
                <div className="proj" key={p}>
                  <span className="soon">Image coming soon</span>
                  <span className="tag">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-navy">
          <div className="wrap">
            <div className="head">
              <p className="eyebrow" style={{ color: 'var(--teal-bright)' }}>
                Contact Us
              </p>
              <h2>Request a Quote</h2>
              <p>Tell us what your property needs and we’ll get back to you.</p>
            </div>
            <div className="contact-grid">
              <div className="panel">
                <h3>{company.name}</h3>
                <div className="row">
                  <span aria-hidden="true">📍</span>
                  <span>{company.location}</span>
                </div>
                {team.map((m) => (
                  <div className="row" key={m.href}>
                    <span aria-hidden="true">📞</span>
                    <a href={m.href}>{m.phone}</a> · {m.role}
                  </div>
                ))}
                <div className="row">
                  <span aria-hidden="true">✉️</span>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
                <div className="quick">
                  <a className="call" href={primaryPhoneHref}>
                    Call
                  </a>
                  <a
                    className="wa"
                    href={`https://wa.me/${company.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                  <a className="mail" href={`mailto:${company.email}`}>
                    Email
                  </a>
                </div>
              </div>
              <div className="panel">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot-grid">
          <div>
            <Image src="/logo-on-dark.png" alt={company.name} width={192} height={192} />
            <p style={{ fontSize: '.85rem', color: 'rgba(244,242,231,.55)' }}>{company.location}</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {services.slice(0, 6).map((s) => (
                <li key={s.code}>
                  <a href="#services">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              {team.map((m) => (
                <li key={m.href}>
                  <a href={m.href}>{m.phone}</a>
                </li>
              ))}
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>{company.location}</li>
            </ul>
          </div>
        </div>
        <div className="bar">
          <div className="wrap">
            <p className="name">
              TRIO BUILT GULF{' '}
              <span style={{ fontWeight: 400, color: 'rgba(244,242,231,.6)' }}>
                TECHNICAL SERVICES LLC
              </span>
            </p>
            <p className="copy">© {year} Trio Built Gulf Technical Services LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <a className="sticky-call" href={primaryPhoneHref} aria-label="Call Trio Built Gulf">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
    </>
  );
}
