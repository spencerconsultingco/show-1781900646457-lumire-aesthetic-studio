'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: 'I have been to three other med spas in Scottsdale and none of them compare. Renata took 20 minutes just to listen to my concerns before touching my face. My results look completely natural.',
    author: 'Christine M.',
  },
  {
    text: 'I was nervous about trying Botox for the first time but the whole team made me feel so comfortable. Two weeks later my friends thought I just looked well-rested. That is exactly what I wanted.',
    author: 'Andrea T.',
  },
  {
    text: 'The HydraFacial here is next level. My skin was glowing for weeks and Renata customized the boosters specifically for my rosacea. I will not go anywhere else.',
    author: 'Olivia R.',
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="testimonials" className="bg-brand-background py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-brand-accent font-body text-xs font-medium tracking-[0.25em] uppercase mb-4"
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-light text-brand-primary leading-tight"
          >
            Confidence You Can{' '}
            <em className="italic">See and Feel.</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={review.author} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  review,
  index,
}: {
  review: { text: string; author: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="bg-white rounded-2xl p-8 shadow-sm border border-brand-accent/10 flex flex-col"
    >
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="text-brand-accent fill-brand-accent" />
        ))}
      </div>
      <p className="font-body text-brand-secondary text-sm leading-relaxed flex-grow italic mb-6">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-brand-background">
        <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center">
          <span className="font-heading text-brand-accent text-sm font-semibold">
            {review.author.charAt(0)}
          </span>
        </div>
        <p className="font-body text-brand-primary text-sm font-medium">{review.author}</p>
      </div>
    </motion.div>
  );
}
