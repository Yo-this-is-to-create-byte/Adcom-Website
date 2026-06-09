import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Search, Bot, Linkedin, Sparkles, Film, Workflow, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/constants/testIds';

const services = [
  { slug: 'growth-marketing', title: 'Growth Marketing', desc: 'Full-funnel growth systems that compound month over month.', Icon: TrendingUp },
  { slug: 'performance-marketing', title: 'Performance Marketing', desc: 'Paid media engineered for ROAS — Meta, Google, programmatic.', Icon: Target },
  { slug: 'seo', title: 'SEO', desc: 'Editorial-grade SEO built for ranking durability and authority.', Icon: Search },
  { slug: 'ai-seo', title: 'AI SEO', desc: 'Optimised for LLM answers, ChatGPT, Perplexity and Gemini.', Icon: Bot },
  { slug: 'linkedin-marketing', title: 'LinkedIn Marketing', desc: 'Founder-led storytelling that converts inbound into pipeline.', Icon: Linkedin },
  { slug: 'brand-strategy', title: 'Brand Strategy', desc: 'Positioning, narrative and identity systems for category leaders.', Icon: Sparkles },
  { slug: 'content-production', title: 'Content Production', desc: 'Cinematic video, photography and editorial at scale.', Icon: Film },
  { slug: 'marketing-automation', title: 'Marketing Automation', desc: 'Lifecycle, CRM, lead routing and revenue ops built right.', Icon: Workflow },
];

export default function Services() {
  return (
    <section id="services" data-testid={SERVICES.section} className="relative py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <div className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#A0A0A0] mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#A0A0A0]" /> Services
            </div>
            <h2 className="font-display text-[48px] md:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight max-w-3xl">
              Eight disciplines.<br />
              <span className="text-white/40">One revenue engine.</span>
            </h2>
          </div>
          <p className="max-w-md text-[18px] md:text-[20px] text-[#A0A0A0] leading-relaxed">
            Every service is delivered by senior specialists — not pods, not juniors, not outsourced.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.08)] rounded-3xl overflow-hidden">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              data-testid={SERVICES.card(s.slug)}
              data-cursor="hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-black hover:bg-[rgba(255,255,255,0.03)] transition-colors duration-500 p-8 md:p-10 min-h-[280px] flex flex-col justify-between cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center group-hover:bg-[#4F46E5] group-hover:border-[#4F46E5] transition-colors duration-500">
                  <s.Icon size={20} className="text-white" />
                </div>
                <ArrowUpRight size={18} className="text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
              </div>
              <div>
                <div className="text-xs text-[#A0A0A0] mb-2 font-mono">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="font-display text-2xl md:text-[28px] leading-tight tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] md:text-[15px] text-[#A0A0A0] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
