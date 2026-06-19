import Image from 'next/image';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Our Approach', href: '#feature' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Botox and Dysport',
    'Dermal Fillers',
    'Laser Skin Resurfacing',
    'HydraFacial',
    'Emsculpt NEO Body Contouring',
    'PRP Microneedling',
  ];

  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.png"
                alt="LumièRe Aesthetic Studio Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div>
                <p className="font-heading text-base font-semibold text-white">LumièRe</p>
                <p className="font-body text-white/50 text-xs tracking-widest uppercase">Aesthetic Studio</p>
              </div>
            </div>
            <p className="font-body text-white/60 text-sm leading-relaxed mb-6">
              Boutique med spa in Scottsdale, AZ. Led by Renata Voss, NP, with 14 years of expertise in cosmetic medicine.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-accent text-white font-body font-medium text-xs tracking-wide px-5 py-2.5 rounded-full hover:bg-white hover:text-brand-primary transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

          <div>
            <h4 className="font-body text-xs font-medium tracking-[0.2em] uppercase text-white/50 mb-5">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/70 hover:text-brand-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs font-medium tracking-[0.2em] uppercase text-white/50 mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="font-body text-sm text-white/70 hover:text-brand-accent transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs font-medium tracking-[0.2em] uppercase text-white/50 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-brand-accent mt-0.5 flex-shrink-0" />
                <a href="tel:5556154175" className="font-body text-sm text-white/70 hover:text-brand-accent transition-colors">
                  (555) 615-4175
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-brand-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:todd@thesitesmith.co" className="font-body text-sm text-white/70 hover:text-brand-accent transition-colors break-all">
                  todd@thesitesmith.co
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-brand-accent mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-white/70">Scottsdale, AZ</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={14} className="text-brand-accent mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-white/70">Tue to Sat, 9am to 6pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/40 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} LumièRe Aesthetic Studio. All rights reserved.
          </p>
          <p className="font-body text-white/40 text-xs">
            Website by{' '}
            <a
              href="https://thesitesmith.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-accent hover:text-white transition-colors duration-200"
            >
              The Sitesmith
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
