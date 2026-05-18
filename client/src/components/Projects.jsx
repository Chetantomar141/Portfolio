import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowUpRight, GithubLogo } from '@phosphor-icons/react';

const Projects = () => {
  const projects = [
    {
      title: 'Dizipay',
      role: 'Lead Developer (Solo)',
      desc: 'A robust, high-performance digital payments SaaS platform featuring automated payment routing, instant ledger balance calculations, and secure multi-user role authorizations.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT Auth', 'Cloudinary CDN'],
      liveLink: 'https://dizipay.in',
      gitLink: null,
    },
    {
      title: 'Adfinx Loan',
      role: 'Full Stack Engineer',
      desc: 'An enterprise microfinance loan management system designed with precise customer eligibility calculators, secure collateral trackers, and responsive administrative dashboards.',
      tech: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Firebase Storage', 'RESTful API'],
      liveLink: 'https://adfinxloan.com',
      gitLink: null,
    },
    {
      title: 'LMS Platform',
      role: 'Backend Architect',
      desc: 'A comprehensive online learning management engine equipped with robust course subscription paths, secure media routing, and real-time student dashboards.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Sequelize ORM', 'Stripe Payments'],
      liveLink: null,
      gitLink: 'https://github.com/ChetanTomar25/LMS-Platform',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-brand-bg border-b border-brand-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="mb-12 space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-brand-accent font-semibold">
            Case Studies
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-primary">
            Featured Projects
          </h2>
        </div>

        {/* 3-Column Equal-Sized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-brand-surface border border-brand-border p-5 rounded-lg flex flex-col h-full justify-between hover:border-brand-accent/20 hover:shadow-sm transition-all duration-150 group"
              data-testid={`project-card-${index}`}
            >
              {/* Top Section */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-base font-bold text-brand-primary tracking-tight group-hover:text-brand-accent transition-colors duration-150">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[9px] uppercase tracking-wider font-semibold text-brand-accent bg-brand-accent/5 border border-brand-accent/15 px-2 py-0.5 rounded">
                    {project.role}
                  </span>
                </div>

                <p className="text-xs md:text-sm text-brand-secondary leading-relaxed font-sans min-h-[72px]">
                  {project.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-[10px] bg-brand-bg border border-brand-border px-2 py-0.5 rounded text-brand-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-5 border-t border-brand-border flex items-center justify-between">
                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-accent hover:text-brand-accent/80 transition-colors"
                    data-testid={`project-live-btn-${project.title.toLowerCase()}`}
                  >
                    <Globe size={14} /> Live Platform <ArrowUpRight size={12} weight="bold" />
                  </a>
                ) : (
                  <span className="text-xs font-mono uppercase text-brand-secondary/40 select-none">
                    Private Repo
                  </span>
                )}

                {project.gitLink && (
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary hover:text-brand-accent transition-colors"
                    data-testid={`project-git-btn-${project.title.toLowerCase()}`}
                  >
                    <GithubLogo size={14} /> GitHub Code <ArrowUpRight size={12} weight="bold" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
