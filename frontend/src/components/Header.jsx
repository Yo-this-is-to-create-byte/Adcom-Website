import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV } from '@/constants/testIds';
import MagneticButton from './MagneticButton';

const links = [
  { label: 'Work', id: 'work', testid: NAV.workLink },
  { label: 'Services', id: 'services', testid: NAV.servicesLink },
  { label: 'Case Studies', id: 'case-studies', testid: NAV.caseStudiesLink },
  { label: 'About', id: 'about', testid: NAV.aboutLink },
  { label: 'Contact', id: 'contact', testid: NAV.contactLink },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl bg-black/60 border-b border-[rgba(255,255,255,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a
          href="#top"
          data-testid={NAV.logoLink}
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center group"
          aria-label="Adcom Media — home"
        >
          <img
            src="https://customer-assets.emergentagent.com/job_adcom-vault/artifacts/25jd59u4_WhatsApp%20Image%202026-06-09%20at%204.34.49%20PM.jpeg"
            alt="Adcom Media"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l.id}
              data-testid={l.testid}
              onClick={() => go(l.id)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#F43F5E] group-hover:w-full transition-all duration-500" />
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton
            data-testid={NAV.ctaButton}
            onClick={() => go('contact')}
            className="px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-[#F43F5E] hover:text-white transition-colors duration-300"
          >
            Book Strategy Call
          </MagneticButton>
        </div>

        <button
          data-testid={NAV.mobileToggle}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-[rgba(255,255,255,0.08)] bg-black/90 backdrop-blur-xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {links.map((l) => (
                <button
                  key={l.id}
                  data-testid={`mobile-${l.testid}`}
                  onClick={() => go(l.id)}
                  className="text-2xl font-display text-left text-white/90 hover:text-white"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => go('contact')}
                className="mt-2 px-6 py-4 rounded-full bg-white text-black font-semibold"
              >
                Book Strategy Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
