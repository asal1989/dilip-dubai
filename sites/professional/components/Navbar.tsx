'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';
import { icons } from '@/lib/icons';
import { company, navLinks } from '@/data/site';

const SECTION_IDS = navLinks.map((l) => l.href.replace('#', ''));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis) setActive(vis.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.2, 0.5] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || open;
  const Phone = icons.Phone;
  const Menu = icons.Menu;
  const X = icons.X;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? 'border-b border-navy/10 bg-off/95 backdrop-blur'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[var(--nav-h)] max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#home" aria-label={`${company.shortName} — home`} className="shrink-0">
          <Logo tone={solid ? 'dark' : 'light'} />
        </a>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative whitespace-nowrap py-1 text-sm transition-colors ${
                  solid
                    ? isActive
                      ? 'text-navy'
                      : 'text-navy/65 hover:text-navy'
                    : isActive
                      ? 'text-off'
                      : 'text-off/70 hover:text-off'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-teal transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={company.phoneHref}
            className={`flex items-center gap-2 whitespace-nowrap text-sm transition-colors ${
              solid ? 'text-navy/75 hover:text-navy' : 'text-off/80 hover:text-off'
            }`}
          >
            <Phone size={15} className="shrink-0 text-teal" />
            <span className="font-mono">{company.phone}</span>
          </a>
          <a
            href="#contact"
            className="whitespace-nowrap bg-teal px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-teal-bright"
          >
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className={`p-2 lg:hidden ${solid ? 'text-navy' : 'text-off'}`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy/10 bg-off px-5 pb-8 pt-4 lg:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-navy/8 py-4 text-navy/80"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={company.phoneHref}
            className="mt-5 flex items-center gap-2 text-sm text-navy/75"
          >
            <Phone size={15} className="text-teal" />
            <span className="font-mono">{company.phone}</span>
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block bg-teal px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.14em] text-white"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
