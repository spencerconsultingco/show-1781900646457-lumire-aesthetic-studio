'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[680px] overflow-hidden flex items-center justify-center"
      id="hero"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY }}
      >
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 10, ease: 'linear' }}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero.jpg')" }}
          />
        </motion.div>
      </motion.div>

      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.60) 100%)',
        }}
      />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Sparkles size={14} className="text-brand-accent" />
          <span className="text-brand-accent font-body text-xs font-medium tracking-[0.25em] uppercase">
            Scottsdale&apos;s Boutique Med Spa
          </span>
          <Sparkles size={14} className="text-brand-accent" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-tight mb-6"
        >
          Radiance,{' '}
          <em className="italic font-light">Refined.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="font-body text-white/85 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Results-driven aesthetic treatments personally performed by Renata Voss, NP. Natural-looking enhancements tailored to your unique skin, structure, and goals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="flex items-center gap-2 bg-brand-accent text-white font-body font-medium text-sm tracking-wide px-8 py-4 rounded-full hover:bg-white hover:text-brand-accent transition-all duration-300 shadow-lg"
          >
            <span>Contact Us</span>
            <ArrowRight size={16} />
          </a>
          <a
            href="#services"
            className="flex items-center gap-2 border border-white/60 text-white font-body font-medium text-sm tracking-wide px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"
        />
      </div>
    </section>
  );
}
