import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { HERO } from '@/constants/testIds';
import MagneticButton from './MagneticButton';

const HEADLINE_LINE_1 = "We Don't Follow Trends.";
const HEADLINE_LINE_2 = 'We Create Them.';

const charVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.5 + i * 0.025, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  }),
};

function CharReveal({ text, baseDelay = 0 }) {
  return (
    <span className="inline-block overflow-hidden align-baseline">
      <span className="inline-block">
        {text.split('').map((c, i) => (
          <motion.span
            key={i}
            custom={i + baseDelay}
            variants={charVariants}
            initial="hidden"
            animate="visible"
            className="inline-block whitespace-pre"
          >
            {c}
          </motion.span>
        ))}
      </span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden pt-24"
    >
      {/* Background orbs */}
      <motion.div
        style={{ y: y1 }}
        className="orb bg-[#E11D2E] w-[500px] h-[500px] -top-40 -left-40 animate-pulse-slow"
      />
      <motion.div
        style={{ y: y2 }}
        className="orb bg-[#F43F5E] w-[400px] h-[400px] top-1/3 -right-40 animate-pulse-slow"
      />
      <div className="orb bg-[#7f1d1d] w-[600px] h-[600px] bottom-0 left-1/3 opacity-30" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 75%)',
        }}
      />

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-12 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-[#E11D2E] animate-pulse" />
          <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#A0A0A0] font-medium">
            Independent Growth Studio · Est. 2021
          </span>
        </motion.div>

        <h1 className="font-display text-[64px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-[0.9] tracking-tighter">
          <span className="block">
            <CharReveal text="We Don't" baseDelay={0} />{' '}
            <span className="italic font-light text-white/40 align-baseline">
              <CharReveal text="Follow" baseDelay={8} />
            </span>{' '}
            <CharReveal text="Trends." baseDelay={14} />
          </span>
          <span className="block">
            <CharReveal text="We " baseDelay={22} />
            <span className="text-[#F43F5E]">
              <CharReveal text="Create" baseDelay={25} />
            </span>{' '}
            <CharReveal text="Them." baseDelay={31} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-10 max-w-2xl text-[18px] md:text-[20px] leading-relaxed text-[#A0A0A0]"
        >
          Growth marketing, branding, content and performance campaigns engineered
          to scale ambitious businesses — quietly, relentlessly, profitably.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 sm:items-center"
        >
          <MagneticButton
            data-testid={HERO.primaryCta}
            onClick={() => go('contact')}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#E11D2E] hover:bg-[#F43F5E] text-white text-sm font-semibold transition-colors duration-300"
          >
            Start Your Project
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </MagneticButton>

          <MagneticButton
            data-testid={HERO.secondaryCta}
            onClick={() => go('case-studies')}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[rgba(255,255,255,0.15)] hover:border-white text-white text-sm font-semibold transition-colors duration-300"
          >
            View Work
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#A0A0A0]"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
