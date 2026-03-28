import React from 'react';

const highlights = [
  { icon: '🎓', label: 'B.Tech CSE', sub: 'Lovely Professional University' },
  { icon: '💻', label: 'MERN Stack', sub: 'Full Stack Development' },
  { icon: '🧠', label: 'DSA', sub: 'Problem Solving' },
  { icon: '⚡', label: 'Fast Learner', sub: 'Adaptable & Collaborative' },
];

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white tracking-tight">
        About <span className="text-[#5b99ff]">Me</span>
      </h2>
      <p className="text-center text-gray-400 mb-14 text-base">Get to know me better</p>
      
      <div className="glass-card p-8 md:p-12 border border-white/5 shadow-2xl overflow-hidden relative">
        {/* Subtle background glow */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#5b99ff]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="space-y-5 text-gray-300 text-base md:text-lg leading-relaxed relative z-10">
          <p>
            I am a passionate <span className="font-semibold text-white">Full Stack Developer</span> currently 
            pursuing my B.Tech in Computer Science and Engineering at{' '}
            <span className="font-semibold text-[#5b99ff]">Lovely Professional University</span>. I specialize 
            in building end-to-end web applications using the <span className="font-semibold text-white">MERN Stack</span> — 
            crafting clean, responsive frontends and robust, scalable backends.
          </p>
          <p>
            I have a strong foundation in <span className="font-semibold text-white">Data Structures and Algorithms</span>, 
            having solved 100+ problems on LeetCode and GeeksforGeeks. I bring a problem-solving mindset to every 
            project — whether it's designing an AI-powered hiring platform or building a full-featured e-commerce system.
          </p>
          <p>
            I am a <span className="font-semibold text-white">fast learner</span> who thrives in team environments. 
            I believe in writing maintainable code, delivering great user experiences, and continuously improving 
            through feedback and exploration of modern web technologies.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/5">
          {highlights.map((h, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2 p-4 rounded-xl bg-white/3 hover:bg-white/5 transition-colors">
              <span className="text-3xl">{h.icon}</span>
              <span className="font-bold text-white text-sm">{h.label}</span>
              <span className="text-xs text-gray-400">{h.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
