import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Achievements = () => {
  const { achievements } = portfolioData;

  const Counter = ({ from = 0, to, suffix = "", duration = 2000 }) => {
    const [count, setCount] = React.useState(from);
    
    React.useEffect(() => {
      let startTime;
      let animationFrame;
      
      const updateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        // duration is in ms
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeProgress * (to - from) + from);
        
        setCount(currentCount);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCount);
        }
      };

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          animationFrame = requestAnimationFrame(updateCount);
          observer.disconnect();
        }
      });
      
      const el = document.getElementById(`counter-${to}`);
      if (el) observer.observe(el);

      return () => {
        if (animationFrame) cancelAnimationFrame(animationFrame);
        observer.disconnect();
      };
    }, [from, to, duration]);

    return (
      <span className="font-mono" id={`counter-${to}`}>
        {count}{suffix}
      </span>
    );
  };

  return (
    <section id="achievements" className="py-[60px] md:py-[100px] relative z-20 container mx-auto px-6 max-w-7xl border-t border-white/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-purple/5 via-bg-primary to-bg-primary">
      <div className="flex flex-col items-center justify-center text-center gap-16">
        
        <div className="fade-up flex flex-col md:flex-row gap-16 md:gap-32 w-full justify-center">
          {achievements.map((ach, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4 relative group w-full md:w-auto">
              <div className="absolute inset-0 bg-accent-blue/10 blur-[80px] rounded-full group-hover:bg-accent-blue/20 transition-all duration-[var(--transition-slow)] pointer-events-none"></div>
              
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-syne font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-text-secondary group-hover:from-accent-cyan group-hover:to-accent-blue transition-all duration-[var(--transition-slow)] drop-shadow-2xl">
                <Counter to={parseInt(ach.count)} suffix={ach.suffix} duration={2000} />
              </h2>
              
              <div className="flex items-center justify-center gap-3">
                <span className="text-accent-pink text-2xl">{idx === 0 ? '⚡' : '⭐'}</span>
                <p className="text-lg md:text-xl lg:text-2xl font-inter text-white font-medium max-w-[200px]">
                  {ach.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider Glow */}
        <div className="fade-up w-full max-w-2xl h-[2px] bg-gradient-to-r from-transparent via-accent-purple to-transparent opacity-50 shadow-[0_0_20px_#7c3aed]"></div>

      </div>
    </section>
  );
};

export default Achievements;
