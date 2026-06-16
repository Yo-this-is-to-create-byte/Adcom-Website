import React from 'react';
import { motion } from 'framer-motion';

const items = [
  'Finova', 'Maison Noir', 'Orbit', 'Numa', 'Kavi Coffee', 'Halo Labs',
  'Nordic House', 'Polar', 'Atlas Pay', 'Onyx', 'Verve', 'Soma',
];

export default function Marquee() {
  return (
    <section className="relative py-12 border-y border-[rgba(255,255,255,0.08)] overflow-hidden">
      <div className="text-xs uppercase tracking-[0.25em] text-[#A0A0A0] text-center mb-6">
        A few of the brands we've quietly grown
      </div>
      <div className="relative">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
        >
          {[...items, ...items].map((label, i) => (
            <div key={i} className="flex items-center gap-3 shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#E11D2E]" />
              <span className="font-display text-2xl md:text-3xl tracking-tight text-white/80">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
