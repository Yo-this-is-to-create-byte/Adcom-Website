import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '@/constants/testIds';

const studies = [
  {
    slug: 'finova',
    client: 'Finova',
    industry: 'Fintech',
    tag: 'Growth + Performance',
    title: 'From stealth to category challenger.',
    metric: '12.4x ROAS',
    metric2: '₹38Cr revenue',
    image: 'https://images.unsplash.com/photo-1640161704729-cbe966a08476?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'maison-noir',
    client: 'Maison Noir',
    industry: 'Luxury D2C',
    tag: 'Brand Strategy + Content',
    title: 'A wordless brand world that sells out drops in 6 hours.',
    metric: '+340% AOV',
    metric2: '92k waitlist',
    image: 'https://images.unsplash.com/photo-1620207418302-439b387441b0?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'orbit-saas',
    client: 'Orbit',
    industry: 'B2B SaaS',
    tag: 'AI SEO + LinkedIn',
    title: 'Owning the answer in every LLM that matters.',
    metric: '8.1x pipeline',
    metric2: '#1 in Perplexity',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'numa-wellness',
    client: 'Numa',
    industry: 'Wellness',
    tag: 'Performance + Automation',
    title: 'Subscription engine that scaled to seven figures monthly.',
    metric: '4.7x LTV',
    metric2: '63% retention',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'kavi-coffee',
    client: 'Kavi Coffee',
    industry: 'F&B',
    tag: 'Brand + Content',
    title: 'A coffee brand the internet refuses to scroll past.',
    metric: '21M views',
    metric2: '+540% DTC',
    image: 'https://images.unsplash.com/photo-1559526324-c1f275fbfa32?auto=format&fit=crop&w=1600&q=80',
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  // total cards width — translate to show all
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

  return (
    <section
      id="case-studies"
      data-testid={CASE_STUDIES.section}
      ref={ref}
      className="relative"
      style={{ height: `${studies.length * 80}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-8 flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#A0A0A0] mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#A0A0A0]" /> Selected Work
            </div>
            <h2 className="font-display text-[40px] md:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight">
              Case studies that read like<br /><span className="text-white/40">growth thrillers.</span>
            </h2>
          </div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#A0A0A0] hidden md:block">
            Scroll to explore →
          </span>
        </div>

        <div className="flex-1 flex items-center">
          <motion.div style={{ x }} className="flex gap-6 md:gap-8 pl-4 sm:pl-6 lg:pl-8">
            {studies.map((s, i) => (
              <motion.article
                key={s.slug}
                data-testid={CASE_STUDIES.card(s.slug)}
                data-cursor="hover"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className="group relative shrink-0 w-[85vw] sm:w-[70vw] md:w-[55vw] lg:w-[42vw] aspect-[4/5] md:aspect-[16/11] rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${s.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Top label */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                  <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[11px] uppercase tracking-[0.2em] border border-white/10">
                    {String(i + 1).padStart(2, '0')} · {s.industry}
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-[#4F46E5]/90 text-[11px] uppercase tracking-[0.2em]">
                    {s.tag}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col gap-6">
                  <div>
                    <div className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#A0A0A0] mb-3">
                      {s.client}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl leading-[1.05] tracking-tight max-w-md">
                      {s.title}
                    </h3>
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <div className="flex gap-6">
                      <div>
                        <div className="font-display text-2xl md:text-3xl text-[#6366F1]">{s.metric}</div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-[#A0A0A0] mt-1">Result</div>
                      </div>
                      <div>
                        <div className="font-display text-2xl md:text-3xl">{s.metric2}</div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-[#A0A0A0] mt-1">Impact</div>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-[#6366F1] group-hover:text-white transition-colors duration-500">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
            <div className="shrink-0 w-[20vw] h-1" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
