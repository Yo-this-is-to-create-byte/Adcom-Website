import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const items = [
  {
    quote:
      "Adcom rebuilt our entire growth stack in 90 days. We went from a paid acquisition mess to a 4.2x ROAS machine that finally lets us scale spend without praying.",
    name: 'Anika Sharma',
    role: 'VP Growth, Finova',
    avatar: 'https://i.pravatar.cc/120?img=47',
  },
  {
    quote:
      "They write better copy than my best writers, ship faster than my best engineers, and report to my board like a CFO. I genuinely cannot run growth without them now.",
    name: 'Rohan Mehta',
    role: 'Founder & CEO, Maison Noir',
    avatar: 'https://i.pravatar.cc/120?img=12',
  },
  {
    quote:
      "What you actually buy from Adcom is taste. The work looks expensive because it is — and because they refuse to ship anything that isn't.",
    name: 'Priya Kapoor',
    role: 'CMO, Orbit',
    avatar: 'https://i.pravatar.cc/120?img=32',
  },
  {
    quote:
      "The only agency we've ever worked with that genuinely understands LLM-era search. Our inbound from Perplexity and ChatGPT now outperforms Google.",
    name: 'Daniel Wu',
    role: 'Head of Marketing, Numa',
    avatar: 'https://i.pravatar.cc/120?img=15',
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), 6500);
    return () => clearInterval(id);
  }, []);
  const item = items[i];

  return (
    <section className="relative py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#A0A0A0] flex items-center gap-3">
            <span className="w-8 h-px bg-[#A0A0A0]" /> Testimonials
          </div>
          <div className="text-xs uppercase tracking-[0.25em] text-[#A0A0A0]">
            {String(i + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </div>
        </div>

        <div className="relative min-h-[420px] md:min-h-[360px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <Quote className="text-[#E11D2E] mb-6" size={36} />
              <p className="font-display text-[28px] md:text-[40px] lg:text-[52px] leading-[1.15] tracking-tight max-w-5xl">
                "{item.quote}"
              </p>
              <div className="mt-12 flex items-center gap-5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border border-[rgba(255,255,255,0.1)]"
                />
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-[#A0A0A0]">{item.role}</div>
                </div>
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <button
            data-testid="testimonial-prev"
            onClick={() => setI((v) => (v - 1 + items.length) % items.length)}
            className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.12)] flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            data-testid="testimonial-next"
            onClick={() => setI((v) => (v + 1) % items.length)}
            className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.12)] flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
          <div className="flex gap-2 ml-4">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1 rounded-full transition-all ${idx === i ? 'w-10 bg-white' : 'w-4 bg-white/20'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
