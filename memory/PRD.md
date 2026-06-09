# Adcom Media — PRD

## Problem Statement
Build a world-class digital marketing agency website for "Adcom Media" that feels premium, cinematic, conversion-focused. Reference: Overdose Digital, Ramotion, Locomotive, Active Theory, Linear, Stripe, Framer.

## Architecture
- Frontend: React (CRA) + Tailwind + Framer Motion + Inter font (900 weight)
- Backend: FastAPI on /api, MongoDB via motor
- Single landing page with anchor-based sections

## Personas
- Founders/CMOs of ambitious D2C, SaaS, fintech brands considering a premium growth partner.

## Core Requirements (static)
- Pure black bg #000000, primary text #FFFFFF, secondary #A0A0A0, accent #4F46E5 (hover #6366F1)
- Inter 900 headings, 400-500 body. Hero 80-120px, sections 48-64px, body 18-20px.
- Sections: Header, Hero, Marquee, Services (8), Case Studies (horizontal scroll), Why Adcom (counters), Process (4 steps), Testimonials, Contact, Footer
- Premium animations: char reveals, parallax orbs, magnetic buttons, custom cursor, scroll-linked horizontal scroll, counter animation, marquee, image masking
- Responsive desktop + tablet + mobile

## Implemented (2026-12)
- Backend: POST/GET /api/contact, MongoDB persistence, EmailStr validation
- Frontend: All 9 sections per brief, custom cursor, magnetic buttons, character-by-character hero reveal, scroll-linked horizontal case studies, animated counters, autoplay testimonials carousel, working contact form
- Tests: 100% backend, 100% frontend (iteration_1.json)

## Backlog
- P1: Email notification on contact submit (Resend/SendGrid)
- P1: Real case studies + client logos when client provides
- P2: Dedicated /work and /services routes with deep case study pages
- P2: Blog/Insights section
- P2: Admin dashboard to view contact submissions
- P2: Reduced-motion preference handling
- P3: i18n, sitemap, analytics
