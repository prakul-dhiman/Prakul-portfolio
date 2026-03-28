import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.1,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="fixed inset-0 z-[9999] bg-[#050508] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center, rgba(91, 153, 255, 0.05) 0%, transparent 70%)]"></div>

      <div className="relative flex flex-col items-center">
        {/* Animated Rings */}
        <div className="relative w-32 h-32 mb-12 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-t-2 border-r-2 border-transparent border-t-[#5b99ff] border-r-[#5b99ff]/30 rounded-full"
          ></motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 border-b-2 border-l-2 border-transparent border-b-[#5b99ff]/50 border-l-[#5b99ff]/10 rounded-full"
          ></motion.div>
          
          <div className="text-3xl font-mono font-black text-white tracking-tighter">
            {progress}%
          </div>
        </div>

        {/* Text Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-2"
        >
          <h2 className="text-lg font-bold tracking-[0.3em] uppercase text-white/90">
            Prakul<span className="text-[#5b99ff]">.dev</span>
          </h2>
          <div className="h-[2px] w-24 bg-white/5 overflow-hidden rounded-full">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-[#5b99ff] shadow-[0_0_10px_#5b99ff]"
            ></motion.div>
          </div>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-2 animate-pulse">
            Architecting Experiences
          </span>
        </motion.div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-10 left-10 w-8 h-8 border-t-2 border-l-2 border-white/10 rounded-tl"></div>
      <div className="absolute top-10 right-10 w-8 h-8 border-t-2 border-r-2 border-white/10 rounded-tr"></div>
      <div className="absolute bottom-10 left-10 w-8 h-8 border-b-2 border-l-2 border-white/10 rounded-bl"></div>
      <div className="absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2 border-white/10 rounded-br"></div>
    </motion.div>
  );
};

export default Loader;
