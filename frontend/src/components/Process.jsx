import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    n: '01',
    title: 'Discovery',
    desc: 'We embed inside your business. Customer interviews, data audits, competitive teardown and a brutally honest growth diagnostic.',
    tag: 'Week 01–02',
  },
  {
    n: '02',
    title: 'Strategy',
    desc: 'Narrative, positioning, channel mix and a 90-day growth model with assumptions you can defend in front of your board.',
    tag: 'Week 03–04',
  },
  {
    n: '03',
    title: 'Creation',
    desc: 'Brand systems, content, campaigns, landing pages and creative built in-house, at the velocity modern growth demands.',
    tag: 'Week 05–08',
  },
  {
    n: '04',
    title: 'Growth',
    desc: 'Live campaigns, weekly experimentation, lifecycle automations and monthly business reviews tied to revenue, not impressions.',
    tag: 'Ongoing',
  },
];

function Row({ s, i, total }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'start 20%'] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.35, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [40, 0]);
  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="grid grid-cols-12 gap-6 md:gap-10 py-12 md:py-16 border-t border-[rgba(255,255,255,0.08)]"
    >
      <div className="col-span-12 md:col-span-2">
        <div className="font-display text-[40px] md:text-[56px] text-[#F43F5E] leading-none">{s.n}</div>
        <div className="mt-3 text-xs uppercase tracking-[0.25em] text-[#A0A0A0]">{s.tag}</div>
      </div>
      <motion.div style={{ x }} className="col-span-12 md:col-span-7">
        <h3 className="font-display text-[32px] md:text-[40px] lg:text-[48px] leading-tight tracking-tight">
          {s.title}
        </h3>
        <p className="mt-4 text-[16px] md:text-[18px] text-[#A0A0A0] leading-relaxed max-w-2xl">
          {s.desc}
        </p>
      </motion.div>
      <div className="hidden md:flex col-span-3 items-center justify-end">
        <div className="text-xs uppercase tracking-[0.25em] text-[#A0A0A0]">
          {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>
      </div>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section id="work" className="relative py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#A0A0A0] mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#A0A0A0]" /> Process
            </div>
            <h2 className="font-display text-[40px] md:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight">
              A method, not<br /><span className="text-white/40">a moodboard.</span>
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-[18px] md:text-[20px] text-[#A0A0A0] leading-relaxed">
            Every engagement runs through the same four-phase operating system,
            calibrated to your stage, ambition and category dynamics.
          </p>
        </div>

        <div>
          {steps.map((s, i) => (
            <Row key={s.n} s={s} i={i} total={steps.length} />
          ))}
          <div className="border-t border-[rgba(255,255,255,0.08)]" />
        </div>
      </div>
    </section>
  );
}
