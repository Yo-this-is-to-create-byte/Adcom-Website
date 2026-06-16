import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Interlude from '@/components/Interlude';
import WhyAdcom from '@/components/WhyAdcom';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import PerformanceMarketing from '@/pages/PerformanceMarketing';
import GrowthMarketing from '@/pages/GrowthMarketing';
import BrandStrategy from '@/pages/BrandStrategy';
import AISEO from '@/pages/AISEO';
import About from '@/pages/About';
import ProcessPage from '@/pages/Process';
import CaseStudiesPage from '@/pages/CaseStudiesPage';
import Careers from '@/pages/Careers';
import ContactPage from '@/pages/ContactPage';

function Landing() {
  return (
    <div className="App noise relative">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <CaseStudies />
        <Interlude
          kicker="Pause."
          line="If your growth has plateaued — or hasn't started — the next move isn't another agency. It's a conversation."
          cta="Book a strategy call"
        />
        <WhyAdcom />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
        <Route path="/services/growth-marketing" element={<GrowthMarketing />} />
        <Route path="/services/brand-strategy" element={<BrandStrategy />} />
        <Route path="/services/ai-seo" element={<AISEO />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
