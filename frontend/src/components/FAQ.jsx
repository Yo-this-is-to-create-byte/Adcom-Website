import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What kind of brands does Adcom Media work with?',
    a: 'We partner with ambitious founders and operators across D2C, fintech, B2B SaaS, wellness, luxury and F&B, primarily in India, the Middle East and the US. Stage matters less to us than ambition: we work with early-stage brands looking to find their growth model and category challengers ready to scale aggressively.',
  },
  {
    q: 'How are engagements structured?',
    a: 'Most engagements start with a focused 90-day diagnostic and build phase, then convert into a quarterly retainer once we have a shared operating model and measurable momentum. Every engagement is led by a lead strategist and run by a tight, expert team, never a faceless pod.',
  },
  {
    q: 'What does pricing look like?',
    a: 'Retainers begin at roughly ₹2.5L / mo for focused, single-capability work and scale based on scope, channels and ambition. We are transparent about pricing in the first call, our model is built on outcomes, not on billable hours.',
  },
  {
    q: 'How quickly can we expect to see results?',
    a: 'Most clients see meaningful directional movement (creative quality, funnel health, attribution clarity, first paid wins) inside the first 30 to 45 days. Material compounding outcomes (ROAS lift, pipeline growth, retention gains) typically show up between months 3 and 6.',
  },
  {
    q: 'Do you take on smaller or early-stage brands?',
    a: 'Yes, often. We work with brands at every stage as long as the ambition is real. For early-stage teams, we offer scoped 90-day sprints to build the foundation: positioning, creative system, first paid channels and measurement. The studio is sized to be useful, not intimidating.',
  },
  {
    q: 'What makes Adcom different from a traditional agency?',
    a: 'No layers, no pods, no trainees on your account. The hands that sold the work do the work. Strategy, creative, media and lifecycle are not separate departments here, they operate as one team accountable to revenue. We measure ourselves against your P&L, not against impressions.',
  },
  {
    q: 'How do you measure success?',
    a: 'We measure against the metric your business actually compounds on: contribution profit, pipeline, LTV, ACV or revenue, depending on stage and category. Every engagement begins by aligning on the one number that matters and ends with a monthly business review against that number.',
  },
  {
    q: 'How quickly can we start?',
    a: 'We open a small number of engagements each quarter. After an initial call, most engagements kick off within 2 to 3 weeks. The fastest way to start is to book a strategy call and share your current numbers.',
  },
];

export default function FAQ({ title = 'Questions, answered.', kicker = 'FAQ' }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#A0A0A0] mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#A0A0A0]" /> {kicker}
            </div>
            <h2 className="font-display text-[40px] md:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight">
              {title}
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-[18px] md:text-[20px] text-[#A0A0A0] leading-relaxed">
            Eight questions we are asked on almost every first call. If yours is not here, our lead strategist will answer it within one business day of you reaching out.
          </p>
        </div>

        <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] overflow-hidden divide-y divide-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} data-testid={`faq-item-${i}`} className="group">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  data-testid={`faq-toggle-${i}`}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 md:px-10 py-6 md:py-8 flex items-start gap-6 hover:bg-[rgba(255,255,255,0.02)] transition-colors"
                >
                  <span className="text-xs font-mono text-[#A0A0A0] pt-1.5 w-8 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 font-display text-[22px] md:text-[28px] lg:text-[32px] leading-[1.2] tracking-tight">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-10 h-10 rounded-full border border-[rgba(255,255,255,0.15)] flex items-center justify-center mt-1 transition-all duration-300 ${
                      isOpen ? 'bg-[#E11D2E] border-[#E11D2E] rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-10 pb-8 md:pb-10 pl-[68px] md:pl-[112px]">
                        <p className="text-[16px] md:text-[18px] leading-relaxed text-[#A0A0A0] max-w-3xl">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
