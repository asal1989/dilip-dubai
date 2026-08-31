'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone, X } from '@/icons';
import logo from '@/assets/logo.png';
import { navLinks, primaryPhone, primaryPhoneHref } from '@/data/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur border-navy/10 shadow-md shadow-navy/5'
          : 'bg-cream/85 backdrop-blur-sm border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-24">
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Trio Built Gulf — home">
          <Image
            src={logo}
            alt="Trio Built Gulf Technical Services LLC"
            priority
            className="h-16 sm:h-20 w-auto"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8 font-body text-[0.92rem] text-navy/80">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`relative py-2 transition-colors hover:text-teal after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-teal after:transition-all hover:after:w-full ${
                  isActive(link.href) ? 'text-teal after:w-full' : 'after:w-0'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={primaryPhoneHref}
            className="flex items-center gap-2 font-mono text-sm text-navy/80 hover:text-teal transition-colors"
          >
            <Phone size={16} className="text-teal" />
            {primaryPhone}
          </a>
          <Link
            href="/contact"
            className="rounded-sm bg-teal px-5 py-2.5 font-display text-sm font-semibold text-cream tracking-wide hover:bg-teal-bright transition-colors"
          >
            GET A QUOTE
          </Link>
        </div>

        <button
          className="lg:hidden text-navy p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-cream border-t border-navy/10 px-5 pb-6 pt-2">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`block py-3 font-body text-base border-b border-navy/5 ${
                    isActive(link.href) ? 'text-teal font-semibold' : 'text-navy/80'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center rounded-sm bg-teal px-5 py-3 font-display text-sm font-semibold text-cream tracking-wide"
          >
            GET A FREE QUOTE
          </Link>
        </div>
      )}
    </header>
  );
}
