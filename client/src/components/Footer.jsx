import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full relative py-8 border-t border-accent-blue/10 bg-bg-primary overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-30 shadow-[0_0_15px_#00d4ff]"></div>
      
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 relative z-10 w-full">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-text-secondary font-syne font-medium tracking-wide text-sm">
            Designed & Developed by <span className="text-white font-bold">Prakul Dhiman</span>
          </p>
          <p className="text-xs uppercase tracking-widest text-text-secondary/50 mt-1">© {new Date().getFullYear()}</p>
        </div>

        <div className="flex items-center gap-6 justify-center">
          <SocialLink href="https://github.com/prakul-dhiman" icon="GH" label="GitHub" />
          <SocialLink href="https://www.linkedin.com/in/prakul58" icon="IN" label="LinkedIn" />
          <SocialLink href="mailto:prakul.dhiman85@gmail.com" icon="EM" label="Email" />
        </div>

        <div className="text-center md:text-right">
          <p className="font-mono text-xs text-text-secondary/60">
            Built with React + Node.js + <span className="text-accent-pink animate-pulse inline-block">♥</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label={label}
    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center font-mono text-xs text-white bg-white/5 hover:bg-accent-blue/20 hover:border-accent-blue/50 hover:text-accent-cyan transition-all duration-[var(--transition-medium)] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-blue"
  >
    {icon}
  </a>
);

export default Footer;
