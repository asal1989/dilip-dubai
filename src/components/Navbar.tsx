'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, Phone, X } from '@/icons';
import logo from '@/assets/logo.png';
import { navLinks, primaryPhone, primaryPhoneHref } from '@/data/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-navy/95 backdrop-blur shadow-lg shadow-black/10' : 'bg-navy/80 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <Image src={logo} alt="Trio Built Gulf Technical Services LLC" className="h-14 w-auto" />
        </a>

        <ul className="hidden lg:flex items-center gap-8 font-body text-[0.92rem] text-cream/90">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-2 transition-colors hover:text-teal-bright after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-teal-bright after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={primaryPhoneHref}
            className="flex items-center gap-2 font-mono text-sm text-cream/90 hover:text-teal-bright transition-colors"
          >
            <Phone size={16} className="text-teal-bright" />
            {primaryPhone}
          </a>
          <a
            href="#contact"
            className="rounded-sm bg-teal px-5 py-2.5 font-display text-sm font-semibold text-cream tracking-wide hover:bg-teal-bright transition-colors"
          >
            GET A QUOTE
          </a>
        </div>

        <button
          className="lg:hidden text-cream p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-navy-deep border-t border-cream/10 px-5 pb-6 pt-2">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-cream/90 font-body text-base border-b border-cream/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center rounded-sm bg-teal px-5 py-3 font-display text-sm font-semibold text-cream tracking-wide"
          >
            GET A FREE QUOTE
          </a>
        </div>
      )}
    </header>
  );
}
