import React from 'react';
import { Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { FOOTER } from '@/constants/testIds';

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-10 border-t border-[rgba(255,255,255,0.08)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 pb-16">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.25em] text-[#A0A0A0] mb-6">Independent · Senior-only · Built in India</div>
            <h3 className="font-display text-[40px] md:text-[56px] lg:text-[64px] leading-tight tracking-tight">
              Quietly building the most<br />
              <span className="text-white/40">ambitious brands online.</span>
            </h3>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <FooterCol
              title="Studio"
              links={[
                { label: 'Work', href: '#work' },
                { label: 'Services', href: '#services' },
                { label: 'Process', href: '#work' },
                { label: 'About', href: '#about' },
              ]}
            />
            <FooterCol
              title="Services"
              links={[
                { label: 'Growth Marketing', href: '#services' },
                { label: 'Performance', href: '#services' },
                { label: 'Brand Strategy', href: '#services' },
                { label: 'AI SEO', href: '#services' },
              ]}
            />
            <FooterCol
              title="Connect"
              links={[
                { label: 'hello@adcommedia.co', href: 'mailto:hello@adcommedia.co' },
                { label: 'Book a call', href: '#contact' },
                { label: 'Careers', href: '#contact' },
                { label: 'Press', href: '#contact' },
              ]}
            />
          </div>
        </div>

        <div
          data-testid={FOOTER.logo}
          className="font-display tracking-tighter leading-none select-none text-[20vw] md:text-[18vw] lg:text-[16vw] text-white/95"
          style={{ letterSpacing: '-0.06em' }}
        >
          ADCOM
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-10 pt-8 border-t border-[rgba(255,255,255,0.08)]">
          <div className="text-xs text-[#A0A0A0]">© {new Date().getFullYear()} Adcom Media. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <SocialLink testid={FOOTER.socialTwitter} href="https://twitter.com" label="Twitter">
              <Twitter size={16} />
            </SocialLink>
            <SocialLink testid={FOOTER.socialLinkedin} href="https://linkedin.com" label="LinkedIn">
              <Linkedin size={16} />
            </SocialLink>
            <SocialLink testid={FOOTER.socialInstagram} href="https://instagram.com" label="Instagram">
              <Instagram size={16} />
            </SocialLink>
          </div>
          <div className="text-xs text-[#A0A0A0] flex items-center gap-2">
            Made with intent, in Bengaluru.
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.25em] text-[#A0A0A0] mb-5">{title}</div>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="group inline-flex items-center gap-1.5 text-[15px] text-white/85 hover:text-white transition-colors"
            >
              {l.label}
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({ testid, href, label, children }) {
  return (
    <a
      data-testid={testid}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.12)] flex items-center justify-center hover:bg-white hover:text-black transition-colors"
    >
      {children}
    </a>
  );
}
