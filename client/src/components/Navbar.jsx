import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[50] transition-all duration-300 ${
        scrolled ? 'py-4 bg-[#050508]/80 backdrop-blur-md border-b border-white/5' : 'py-7 bg-transparent'
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#5b99ff] origin-left shadow-[0_0_8px_#5b99ff]"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          className="text-2xl font-black text-white hover:text-[#5b99ff] transition-colors tracking-tight flex items-center gap-2 group"
          onClick={() => setActive('Home')}
        >
          <div className="w-8 h-8 rounded-lg bg-[#5b99ff]/10 border border-[#5b99ff]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-[#5b99ff] text-sm">P</span>
          </div>
          <span className="hidden sm:block">Prakul<span className="text-[#5b99ff]">.dev</span></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-all duration-300 hover:text-[#5b99ff] ${
                active === link.name ? 'text-[#5b99ff]' : 'text-gray-400'
              }`}
              onClick={() => setActive(link.name)}
            >
              {link.name}
              {active === link.name && (
                <motion.div layoutId="activeNav" className="h-[2px] bg-[#5b99ff] mt-1 rounded-full shadow-[0_0_8px_#5b99ff]" />
              )}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-white text-black font-bold text-xs rounded-full hover:bg-gray-100 transition-all hover:-translate-y-0.5"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-[#050508] border-b border-white/5 py-8 md:hidden"
        >
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-white uppercase tracking-widest"
                onClick={() => {
                  setActive(link.name);
                  setMobileMenuOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
