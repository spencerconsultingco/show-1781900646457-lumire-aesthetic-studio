'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, Clock, Send, MapPin } from 'lucide-react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-brand-accent font-body text-xs font-medium tracking-[0.25em] uppercase mb-4"
            >
              Get in Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl font-light text-brand-primary leading-tight mb-6"
            >
              Begin Your{' '}
              <em className="italic">Consultation.</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body text-brand-secondary text-base leading-relaxed mb-10"
            >
              Every journey at LumièRe starts with a conversation. Reach out to schedule your personalized consultation with Renata. We serve Scottsdale, Paradise Valley, Tempe, and the greater Phoenix metro area.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-5"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-brand-accent" />
                </div>
                <div>
                  <p className="font-body text-xs text-brand-secondary uppercase tracking-wider mb-0.5">Phone</p>
                  <a href="tel:5556154175" className="font-body text-brand-primary font-medium hover:text-brand-accent transition-colors">
                    (555) 615-4175
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-brand-accent" />
                </div>
                <div>
                  <p className="font-body text-xs text-brand-secondary uppercase tracking-wider mb-0.5">Email</p>
                  <a href="mailto:todd@thesitesmith.co" className="font-body text-brand-primary font-medium hover:text-brand-accent transition-colors">
                    todd@thesitesmith.co
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-brand-accent" />
                </div>
                <div>
                  <p className="font-body text-xs text-brand-secondary uppercase tracking-wider mb-0.5">Studio Hours</p>
                  <p className="font-body text-brand-primary font-medium">Tue to Sat, 9am to 6pm</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-brand-accent" />
                </div>
                <div>
                  <p className="font-body text-xs text-brand-secondary uppercase tracking-wider mb-0.5">Location</p>
                  <p className="font-body text-brand-primary font-medium">Scottsdale, AZ</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {submitted ? (
              <div className="bg-brand-background rounded-2xl p-10 text-center flex flex-col items-center justify-center min-h-[480px]">
                <div className="w-16 h-16 rounded-full bg-brand-accent/20 flex items-center justify-center mb-5">
                  <Send size={24} className="text-brand-accent" />
                </div>
                <h3 className="font-heading text-2xl font-light text-brand-primary mb-3">
                  Thank You
                </h3>
                <p className="font-body text-brand-secondary text-sm leading-relaxed max-w-xs">
                  We have received your message and will be in touch shortly to confirm your consultation.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-brand-background rounded-2xl p-8 lg:p-10 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block font-body text-xs text-brand-secondary uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-brand-accent/20 rounded-xl px-4 py-3 font-body text-sm text-brand-text focus:outline-none focus:border-brand-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-body text-xs text-brand-secondary uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-brand-accent/20 rounded-xl px-4 py-3 font-body text-sm text-brand-text focus:outline-none focus:border-brand-accent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block font-body text-xs text-brand-secondary uppercase tracking-wider mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-brand-accent/20 rounded-xl px-4 py-3 font-body text-sm text-brand-text focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block font-body text-xs text-brand-secondary uppercase tracking-wider mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white border border-brand-accent/20 rounded-xl px-4 py-3 font-body text-sm text-brand-text focus:outline-none focus:border-brand-accent transition-colors appearance-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="botox">Botox and Dysport</option>
                    <option value="fillers">Dermal Fillers</option>
                    <option value="laser">Laser Skin Resurfacing</option>
                    <option value="hydrafacial">HydraFacial</option>
                    <option value="emsculpt">Emsculpt NEO Body Contouring</option>
                    <option value="prp">PRP Microneedling</option>
                    <option value="other">Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-body text-xs text-brand-secondary uppercase tracking-wider mb-2">
                    Tell Us About Your Goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white border border-brand-accent/20 rounded-xl px-4 py-3 font-body text-sm text-brand-text focus:outline-none focus:border-brand-accent transition-colors resize-none"
                    placeholder="Share what you're hoping to address or improve..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand-accent text-white font-body font-medium text-sm tracking-wide px-8 py-4 rounded-full hover:bg-brand-primary transition-all duration-300 shadow-md"
                >
                  <span>Contact Us</span>
                  <Send size={15} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
