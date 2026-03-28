import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const EducationCertifications = () => {
  const { education, training, certifications, achievements } = portfolioData;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="education" className="py-24 relative z-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Achievements Section - REFINED */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Key <span className="text-[#5b99ff]">Achievements</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-sm uppercase tracking-widest font-mono">Quantifiable Excellence</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5, borderColor: 'rgba(91, 153, 255, 0.3)' }}
                className="glass-card p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-4 hover:bg-[#5b99ff]/5 group transition-all duration-300"
              >
                 <div className="w-16 h-16 rounded-full bg-[#5b99ff]/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(91,153,255,0.1)]">
                  {i === 0 ? '⚡' : i === 1 ? '⭐' : '🏆'}
                </div>
                <div>
                  <p className="text-4xl font-black text-white font-mono mb-1">
                    {ach.count}<span className="text-[#5b99ff] text-2xl ml-1">{ach.suffix}</span>
                  </p>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
                    {ach.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Education & Training */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">🎓</span>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <motion.div 
                    key={i}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                    className="relative pl-8 border-l-2 border-[#5b99ff]/30 group"
                  >
                    <div className="absolute top-0 left-[-7px] w-3 h-3 rounded-full bg-[#5b99ff] shadow-[0_0_10px_#5b99ff]" />
                    <p className="text-[#5b99ff] text-xs font-bold font-mono py-1">{edu.period}</p>
                    <h4 className="text-lg font-bold text-white group-hover:text-[#5b99ff] transition-colors">{edu.institution}</h4>
                    <p className="text-sm text-gray-400 font-semibold mb-1">{edu.degree}</p>
                    <p className="text-xs text-[#5b99ff] font-bold bg-[#5b99ff]/10 px-2 py-0.5 rounded w-fit">{edu.cgpa}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">🛠️</span>
                Professional Training
              </h3>
              <div className="space-y-4">
                {training.map((t, i) => (
                  <div key={i} className="glass-card p-6 rounded-2xl border border-white/5">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-lg font-bold text-white">{t.title}</h4>
                      <span className="text-xs text-[#5b99ff] font-mono bg-[#5b99ff]/10 px-2 py-1 rounded">{t.period}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {t.topics.map((topic, j) => (
                        <span key={j} className="text-[10px] bg-white/5 text-gray-300 py-1 px-3 rounded-full border border-white/5">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">📜</span>
              Certifications
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, i) => (
                <motion.a
                  key={i}
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 10, backgroundColor: 'rgba(91, 153, 255, 0.05)' }}
                  className="glass-card p-5 rounded-2xl border border-white/5 flex items-center gap-5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#5b99ff]/10 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
                    {cert.issuer === 'HackerRank' ? '🎯' : cert.issuer === 'Infosys' ? '🚀' : cert.issuer === 'NPTEL' ? '🏛️' : '🎓'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-white truncate">{cert.name}</h4>
                    <p className="text-xs text-gray-500 font-bold">{cert.issuer} • {cert.date}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-[#5b99ff] transition-all transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              ))}
            </div>
            
            {/* CTA Box */}
            <div className="mt-8 p-6 rounded-2xl bg-[#5b99ff]/5 border border-[#5b99ff]/20">
              <p className="text-sm text-gray-300 text-center italic">
                "Continuously learning and exploring new technologies to build better digital experiences."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;
