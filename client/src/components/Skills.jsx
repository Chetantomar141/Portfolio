import React from 'react';
import { motion } from 'framer-motion';
import { Browser, Cpu, Database, Wrench, Cloud } from '@phosphor-icons/react';

const Skills = () => {
  const skillGroups = [
    {
      icon: <Browser size={18} className="text-brand-accent" />,
      title: 'Frontend',
      skills: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Responsive Layouts'],
    },
    {
      icon: <Cpu size={18} className="text-brand-accent" />,
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Auth', 'Secure Routes', 'MVC Patterns'],
    },
    {
      icon: <Database size={18} className="text-brand-accent" />,
      title: 'Database',
      skills: ['MySQL', 'MongoDB', 'Sequelize ORM', 'Mongoose', 'DB Normalization', 'Transactions'],
    },
    {
      icon: <Wrench size={18} className="text-brand-accent" />,
      title: 'Tools',
      skills: ['Git & GitHub', 'Postman API Testing', 'Lint Configurations', 'Shell Terminal'],
    },
    {
      icon: <Cloud size={18} className="text-brand-accent" />,
      title: 'Cloud',
      skills: ['Firebase Storage', 'Cloudinary CDN', 'Nginx Proxy', 'PM2 Process Monitor', 'Cloud Integration'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-brand-surface border-b border-brand-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="mb-12 space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-brand-accent font-semibold">
            Tech Stack
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-primary">
            Technical Competencies
          </h2>
        </div>

        {/* Grouped Skills Grid (5 columns on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: groupIndex * 0.05 }}
              className="bg-brand-bg border border-brand-border p-5 rounded-lg transition-all duration-150 hover:border-brand-accent/20 hover:shadow-sm"
              data-testid={`skill-group-${groupIndex}`}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-1.5 bg-brand-surface border border-brand-border rounded-md">
                  {group.icon}
                </div>
                <h3 className="font-semibold text-brand-primary text-sm">
                  {group.title}
                </h3>
              </div>

              {/* Skills Tags Group */}
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="font-mono text-[11px] bg-brand-surface border border-brand-border px-2.5 py-0.5 rounded-md text-brand-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
