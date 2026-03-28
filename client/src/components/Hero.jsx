import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import profilePhoto from '../assets/profile.jpg';

const Hero = () => {
  const { name, linkedin, github, email } = portfolioData.personal;

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center pt-28 pb-16 overflow-hidden z-10 px-6 sm:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col items-start text-left"
          >
            <h2 className="text-2xl md:text-3xl text-[#5b99ff] font-semibold mb-3">
              Hi, I am
            </h2>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 text-white leading-tight">
              {name}
            </h1>
            
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-300">
              Full Stack Developer &nbsp;|&nbsp; <span className="text-[#5b99ff]">MERN Stack</span> &nbsp;|&nbsp; Problem Solver
            </h3>
            
            <p className="text-base md:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
              I am a Computer Science Engineering student passionate about building scalable web applications 
              and solving real-world problems using data structures and modern technologies.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mb-10">
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:border-[#5b99ff]/50 hover:bg-[#5b99ff]/10 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                GitHub
              </a>
              <a
                href={`mailto:${email}`}
                aria-label="Send Email"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#projects"
                  id="btn-view-projects"
                  className="px-7 py-3.5 bg-[#5b99ff] text-white font-bold rounded-full hover:bg-[#4a88ee] transition-all duration-300 text-center shadow-lg shadow-[#5b99ff]/20 hover:shadow-[#5b99ff]/40 hover:-translate-y-0.5 flex-1 whitespace-nowrap"
                >
                  View Projects
                </a>
                <a
                  href="https://drive.google.com/uc?export=download&id=1obBVMzTwSjxnwbOfk5TKtdmSbKHBnB8R"
                  download="Prakul_Dhiman_Resume.pdf"
                  id="btn-download-resume"
                  className="px-7 py-3.5 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all duration-300 text-center shadow-lg hover:-translate-y-0.5 flex-1 whitespace-nowrap flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Resume
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://drive.google.com/file/d/1obBVMzTwSjxnwbOfk5TKtdmSbKHBnB8R/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  id="btn-view-resume"
                  className="px-7 py-3.5 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300 text-center flex-1 whitespace-nowrap flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Resume
                </a>
                <a
                  href="#contact"
                  id="btn-contact"
                  className="px-7 py-3.5 bg-[#232323] text-white font-semibold rounded-full hover:bg-[#2e2e2e] transition-all duration-300 text-center flex-1 whitespace-nowrap"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0 relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[360px] md:h-[360px]">
              
              {/* Glow ring behind the photo */}
              <div className="absolute inset-0 rounded-[40px] bg-[#5b99ff]/10 blur-2xl scale-110"></div>

              {/* Main Photo Frame */}
              <div className="absolute inset-0 bg-[#111] border border-white/10 rounded-[40px] shadow-2xl overflow-hidden z-10">
                <img src={profilePhoto} alt="Prakul Dhiman - Full Stack Developer" className="w-full h-full object-cover object-top" />
              </div>

              {/* Floating Badge 1 - Left Middle */}
              <div className="absolute top-1/3 -left-10 md:-left-12 bg-[#1a1a2e]/90 backdrop-blur-sm border border-white/10 p-4 md:p-5 rounded-2xl z-20 shadow-xl flex items-center justify-center animate-[float_4s_ease-in-out_infinite]">
                <span className="text-[#5b99ff] font-mono font-bold text-xl md:text-2xl">{'</>'}</span>
              </div>

              {/* Floating Badge 2 - Bottom Left */}
              <div className="absolute bottom-10 -left-6 md:-left-8 bg-[#1a1a2e]/90 backdrop-blur-sm border border-white/10 p-4 rounded-2xl z-20 shadow-xl flex items-center justify-center animate-[float_5s_ease-in-out_infinite_1s]">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-[#00d4ff] w-6 h-6" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
              </div>

              {/* Floating Badge 3 - Right Bottom */}
              <div className="absolute bottom-1/4 -right-10 md:-right-12 bg-[#1a1a2e]/90 backdrop-blur-sm border border-white/10 p-4 md:p-5 rounded-2xl z-20 shadow-xl flex items-center justify-center animate-[float_6s_ease-in-out_infinite_2s]">
                <span className="text-[#47A248] font-mono font-bold text-lg md:text-xl">{'>_'}</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
