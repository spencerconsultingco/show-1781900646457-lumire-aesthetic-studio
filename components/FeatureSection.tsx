'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { BadgeCheck, ShieldCheck, Heart, Users } from 'lucide-react';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Board-Certified Expertise',
    body: 'Renata Voss holds board certification as a nurse practitioner with 14 years devoted entirely to cosmetic medicine and skin rejuvenation.',
  },
  {
    icon: BadgeCheck,
    title: 'FDA-Approved Products Only',
    body: 'We never cut corners on product quality. Every injectable and device used in our studio carries full FDA approval and clinical validation.',
  },
  {
    icon: Heart,
    title: 'No Pressure, Ever',
    body: 'Clients consistently say they feel heard rather than sold to. We recommend only what is genuinely right for your goals and anatomy.',
  },
  {
    icon: Users,
    title: 'Renata Treats Every Client',
    body: 'Unlike high-volume clinics that delegate injectables, Renata personally performs every treatment. Your face is in expert hands, period.',
  },
];

export default function FeatureSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="feature" className="bg-brand-primary py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div ref={ref}>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-brand-accent font-body text-xs font-medium tracking-[0.25em] uppercase mb-4"
            >
              Why LumieRe
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl font-light text-white leading-tight mb-6"
            >
              The Difference is{' '}
              <em className="italic">in the Detail.</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body text-white/70 text-base leading-relaxed mb-10"
            >
              In a city full of med spas, LumieRe stands apart through the conviction that genuine results come from genuine care. Renata founded this boutique studio to offer Scottsdale clients something rare: a practitioner who is accountable, unhurried, and deeply skilled.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 25 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-accent/20 flex items-center justify-center mt-0.5">
                      <Icon size={18} className="text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-white mb-1">
                        {pillar.title}
                      </h3>
                      <p className="font-body text-white/60 text-sm leading-relaxed">
                        {pillar.body}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-brand-accent text-white font-body font-medium text-sm tracking-wide px-8 py-4 rounded-full hover:bg-white hover:text-brand-primary transition-all duration-300 shadow-md"
              >
                Contact Us
              </a>
            </motion.div>
          </div>

          <FeatureImageBlock isInView={isInView} />
        </div>
      </div>
    </section>
  );
}

function FeatureImageBlock({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.3 }}
      className="relative"
    >
      <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
        <Image
          src="/images/gallery-1.jpg"
          alt="Renata Voss performing an aesthetic treatment at LumieRe Aesthetic Studio"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-transparent to-transparent" />
      </div>

      <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 max-w-[220px]">
        <p className="font-heading text-3xl font-semibold text-brand-primary">14+</p>
        <p className="font-body text-brand-secondary text-xs mt-1 leading-snug">
          Years of cosmetic medicine expertise
        </p>
      </div>

      <div className="absolute top-6 -right-4 bg-brand-accent rounded-xl shadow-lg px-4 py-3">
        <p className="font-body text-white text-xs font-medium tracking-wide">
          Board-Certified NP
        </p>
      </div>

      <div className="absolute top-1/3 -left-4 lg:-left-10">
        <div className="relative rounded-xl overflow-hidden w-24 h-24 shadow-lg border-2 border-white">
          <Image
            src="/images/gallery-2.jpg"
            alt="Aesthetic treatment result at LumieRe Aesthetic Studio"
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>
      </div>
    </motion.div>
  );
}
