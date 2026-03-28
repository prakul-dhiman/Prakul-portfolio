import React from 'react';
import { portfolioData } from '../data/portfolioData';

const ProjectCard = ({ project }) => (
  <div className="glass-card rounded-2xl border border-white/5 overflow-hidden flex flex-col h-full bg-[#0a0a0a] group relative hover:border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
    {/* Project Image / Preview */}
    <div className="bg-white/5 h-48 sm:h-56 w-full relative overflow-hidden">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
      ) : null}
      <div className={`absolute inset-0 items-center justify-center bg-gradient-to-br from-[#0d0d1a] to-[#1a1a2e] ${project.image ? 'hidden' : 'flex'}`}>
        <span className="text-[#5b99ff] font-mono text-5xl opacity-30">{'</>'}</span>
      </div>

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-3 left-3 px-3 py-1 bg-[#5b99ff]/20 border border-[#5b99ff]/30 rounded-full text-[#5b99ff] text-xs font-semibold backdrop-blur-sm">
          ⭐ Featured
        </div>
      )}

      {/* Hover overlay with action links */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
        {project.live && project.live !== '#' && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#5b99ff] text-white text-sm font-bold rounded-full hover:bg-[#4a88ee] transition-colors shadow-lg"
            title="Live Demo"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        )}
        {project.github && project.github !== '#' && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 text-white text-sm font-bold rounded-full hover:bg-white/20 transition-colors"
            title="GitHub Code"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            GitHub
          </a>
        )}
      </div>
    </div>

    {/* Card Body */}
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 shrink-0">
          {project.period}
        </span>
      </div>
      <p className="text-[#5b99ff] text-sm font-medium mb-3">{project.subtitle}</p>
      <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Stats */}
      {project.stats && project.stats.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {project.stats.map((stat) => (
            <span key={stat} className="px-2.5 py-1 bg-[#5b99ff]/10 border border-[#5b99ff]/20 text-[#5b99ff] text-xs rounded-lg font-medium">
              ✓ {stat}
            </span>
          ))}
        </div>
      )}

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.techStack.map((tech) => (
          <span key={tech} className="px-2.5 py-1 bg-[#1a1a1a] border border-white/5 text-xs text-gray-300 rounded-lg">
            {tech}
          </span>
        ))}
      </div>

      {/* Bottom Link Bar */}
      <div className="flex gap-3 mt-5 pt-5 border-t border-white/5">
        {project.github && project.github !== '#' && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            View Code
          </a>
        )}
        {project.live && project.live !== '#' && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#5b99ff] transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const { projects } = portfolioData;
  return (
    <section id="projects" className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white tracking-tight">
        Featured <span className="text-[#5b99ff]">Projects</span>
      </h2>
      <p className="text-center text-gray-400 mb-14 text-base">Things I've built and shipped</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
