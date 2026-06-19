'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Our Approach', href: '#feature' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="LumièRe Aesthetic Studio Logo"
              width={64}
              height={64}
              className="w-16 h-16 object-contain flex-shrink-0"
              priority
            />
            <div className="hidden sm:block">
              <span
                className={`font-heading text-lg font-semibold tracking-wide transition-colors duration-300 ${
                  isScrolled ? 'text-brand-primary' : 'text-white'
                }`}
              >
                LumièRe
              </span>
              <p
                className={`text-xs tracking-[0.15em] uppercase font-body font-light transition-colors duration-300 ${
                  isScrolled ? 'text-brand-secondary' : 'text-white/80'
                }`}
              >
                Aesthetic Studio
              </p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-body font-medium tracking-wide transition-colors duration-300 hover:text-brand-accent ${
                  isScrolled ? 'text-brand-primary' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:5556154175"
              className="flex items-center gap-2 bg-brand-accent text-white text-sm font-body font-medium px-5 py-2.5 rounded-full hover:bg-brand-primary transition-colors duration-300"
            >
              <Phone size={14} />
              <span>Contact Us</span>
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled ? 'text-brand-primary' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-brand-background shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-brand-primary font-body font-medium text-base hover:text-brand-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:5556154175"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-brand-accent text-white font-body font-medium px-6 py-3 rounded-full hover:bg-brand-primary transition-colors duration-300 mt-2"
            >
              <Phone size={15} />
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
