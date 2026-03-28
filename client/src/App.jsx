import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { useScrollAnimation } from './hooks/useScrollAnimation';

// Components
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const [loading, setLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Initialize CSS animation hook
  useScrollAnimation();

  useEffect(() => {
    // Smooth scroll setup (Lenis) - issue #2 timing fix
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const handleScroll = (time) => {
      lenis.raf(time);

      // Back to top visibility
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      requestAnimationFrame(handleScroll);
    };
    requestAnimationFrame(handleScroll);

    // Initial loader timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <ParticlesBackground />
      <CustomCursor />

      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <div className="min-h-screen bg-bg-primary font-inter w-full overflow-hidden" key="content">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <EducationCertifications />
              <Contact />
            </main>
            <Footer />

            {showBackToTop && (
              <button onClick={scrollToTop} className="back-to-top" aria-label="Back to Top">
                ↑
              </button>
            )}
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
