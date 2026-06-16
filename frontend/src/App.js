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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
