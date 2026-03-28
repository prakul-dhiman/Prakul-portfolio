import React from 'react';

const skillCategories = [
  {
    icon: '{'  + '}',
    title: 'Programming Languages',
    color: '#5b99ff',
    skills: ['C++', 'Java', 'Python', 'JavaScript'],
  },
  {
    icon: '⚡',
    title: 'Web Development',
    color: '#00d4ff',
    skills: ['HTML', 'CSS', 'JavaScript', 'REST APIs'],
  },
  {
    icon: '⚙️',
    title: 'Frameworks',
    color: '#a78bfa',
    skills: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
  },
  {
    icon: '🗄️',
    title: 'Databases',
    color: '#34d399',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    icon: '🛠️',
    title: 'Tools',
    color: '#f59e0b',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code'],
  },
  {
    icon: '🧠',
    title: 'Core Concepts',
    color: '#f472b6',
    skills: ['Data Structures', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
  {
    icon: '🤝',
    title: 'Soft Skills',
    color: '#fb923c',
    skills: ['Team Collaboration', 'Fast Learner', 'Adaptability'],
  },
];

const SkillTag = ({ skill, color }) => (
  <span
    className="px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-300 hover:-translate-y-0.5 cursor-default"
    style={{
      backgroundColor: `${color}10`,
      borderColor: `${color}30`,
      color: '#e2e8f0',
    }}
  >
    {skill}
  </span>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white tracking-tight">
        Technical <span className="text-[#5b99ff]">Skills</span>
      </h2>
      <p className="text-center text-gray-400 mb-14 text-base">Technologies and tools I work with</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat) => (
          <div
            key={cat.title}
            className="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-mono font-bold"
                style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
              >
                {cat.icon}
              </div>
              <h3 className="text-base font-bold text-white">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <SkillTag key={skill} skill={skill} color={cat.color} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
