import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Certifications = () => {
  const { certifications, training } = portfolioData;

  return (
    <section id="certifications" className="py-[60px] md:py-[100px] relative z-20 container mx-auto px-6 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-16">

        {/* Training Timeline */}
        <div className="fade-up lg:w-1/3">
          <span className="font-mono text-accent-cyan tracking-widest text-xs uppercase">— LEARNING PATH —</span>
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-10 text-white mt-2">TRAINING</h2>

          <div className="relative border-l-2 border-white/10 pl-8 ml-4">
            {training.map((item, idx) => (
              <div key={idx} className="mb-10 relative group">
                {/* Timeline Dot */}
                <span className="absolute -left-10 w-4 h-4 bg-bg-primary border-2 border-accent-cyan rounded-full group-hover:bg-accent-cyan group-hover:shadow-[0_0_15px_rgba(0,212,255,1)] transition-colors duration-[var(--transition-medium)]"></span>

                <h3 className="text-xl font-bold font-syne text-white mb-1 group-hover:text-accent-cyan transition-colors">{item.title}</h3>
                <span className="text-accent-pink font-mono text-xs">{item.period}</span>

                <div className="flex flex-wrap gap-2 mt-4">
                  {item.topics.map(topic => (
                    <span key={topic} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-text-secondary group-hover:border-accent-blue/30 transition-colors">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="fade-left lg:w-2/3">
          <span className="font-mono text-accent-purple tracking-widest text-xs uppercase">— MILESTONES —</span>
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-10 text-white mt-2">CERTIFICATIONS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <a
                href={cert.url || '#'}
                target={cert.url && cert.url !== '#' ? '_blank' : '_self'}
                rel={cert.url && cert.url !== '#' ? 'noopener noreferrer' : ''}
                key={idx}
                className="glass-card p-6 rounded-[16px] relative group overflow-hidden border border-white/10 hover:border-accent-purple/50 bg-gradient-to-b from-white/5 to-transparent transition-all duration-[var(--transition-medium)] block focus:outline-none focus:ring-2 focus:ring-accent-purple"
                aria-label={`View certification for ${cert.name}`}
              >
                {/* Flip effect visual cue */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent-purple/20 to-transparent rounded-bl-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--transition-medium)]"></div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="min-w-12 h-12 rounded-full bg-accent-purple/10 flex items-center justify-center text-accent-purple text-xl group-hover:scale-110 group-hover:bg-accent-purple group-hover:text-white transition-all duration-[var(--transition-fast)]">
                    🏆
                  </div>
                  <div>
                    <h4 className="font-syne font-bold text-white max-w-[200px]">{cert.name}</h4>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/5 text-sm font-mono text-text-secondary">
                  <span className="font-medium text-white/70">{cert.issuer}</span>
                  <span className="text-accent-cyan">{cert.date}</span>
                </div>

                {/* Hover Reveal Button */}
                <div className="absolute inset-0 bg-bg-primary/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--transition-fast)] pointer-events-none">
                  <span className="px-5 py-2.5 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full font-bold text-xs tracking-widest uppercase text-white shadow-[0_4px_15px_rgba(124,58,237,0.4)]">
                    View Cert ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
