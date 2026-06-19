'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Droplets, Zap, Heart, Thermometer, Waves } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    name: 'Botox and Dysport',
    description:
      'Smooth expression lines and prevent new ones from forming. Renata customizes every injection pattern to preserve your natural movement and expressiveness.',
    tag: 'Most Popular',
  },
  {
    icon: Heart,
    name: 'Dermal Fillers',
    description:
      'Restore lost volume, define contours, and subtly lift features. Using premium hyaluronic acid fillers for results that enhance, never alter.',
    tag: '',
  },
  {
    icon: Zap,
    name: 'Laser Skin Resurfacing',
    description:
      'Address texture, pigmentation, acne scarring, and sun damage with precise laser technology calibrated to your skin tone and depth of concern.',
    tag: '',
  },
  {
    icon: Droplets,
    name: 'HydraFacial',
    description:
      'A multi-step treatment that cleanses, exfoliates, extracts, and infuses custom serums into your skin. Instantly luminous, zero downtime.',
    tag: '',
  },
  {
    icon: Thermometer,
    name: 'Emsculpt NEO Body Contouring',
    description:
      'Build muscle and reduce fat simultaneously with FDA-cleared electromagnetic and radiofrequency technology. No surgery, no recovery.',
    tag: '',
  },
  {
    icon: Waves,
    name: 'PRP Microneedling',
    description:
      'Harness your body's own growth factors to stimulate collagen, tighten skin, and reduce fine lines. A powerful regenerative treatment with lasting results.',
    tag: '',
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-brand-accent font-body text-xs font-medium tracking-[0.25em] uppercase mb-4"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-light text-brand-primary leading-tight mb-5"
          >
            Treatments Tailored{' '}
            <em className="italic">to You</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-brand-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Every treatment at LumièRe begins with a thorough consultation. We believe in educating our clients fully before recommending any procedure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ServiceCard
                key={service.name}
                service={service}
                Icon={Icon}
                index={index}
              />
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-accent text-white font-body font-medium text-sm tracking-wide px-8 py-4 rounded-full hover:bg-brand-primary transition-all duration-300 shadow-md"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  Icon,
  index,
}: {
  service: { name: string; description: string; tag: string };
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative bg-brand-background rounded-2xl p-8 border border-transparent hover:border-brand-accent/20 hover:shadow-xl transition-all duration-400"
    >
      {service.tag && (
        <span className="absolute top-5 right-5 text-[10px] font-body font-medium tracking-[0.15em] uppercase text-brand-accent border border-brand-accent/30 px-3 py-1 rounded-full">
          {service.tag}
        </span>
      )}
      <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-5 group-hover:bg-brand-accent/20 transition-colors duration-300">
        <Icon size={22} className="text-brand-accent" />
      </div>
      <h3 className="font-heading text-xl font-semibold text-brand-primary mb-3 leading-snug">
        {service.name}
      </h3>
      <p className="font-body text-brand-secondary text-sm leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}
