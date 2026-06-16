import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

/**
 * Quiet inline call-to-action used between major sections.
 * Editorial tone, not a sales banner.
 */
export default function Interlude({ kicker, line, cta = 'Book a strategy call', target = 'contact' }) {
  const go = () => {
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="border-y border-[rgba(255,255,255,0.08)] py-12 md:py-16 grid lg:grid-cols-12 gap-8 items-end"
        >
          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.25em] text-[#A0A0A0]">{kicker}</div>
          </div>
          <p className="lg:col-span-7 font-display text-[28px] md:text-[36px] lg:text-[44px] leading-[1.1] tracking-tight">
            {line}
          </p>
          <div className="lg:col-span-3 lg:text-right">
            <button
              data-testid="interlude-cta"
              onClick={go}
              className="group inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#F43F5E] transition-colors"
            >
              <span className="border-b border-white/40 group-hover:border-[#F43F5E] pb-1 transition-colors">
                {cta}
              </span>
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
