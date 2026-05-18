import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from '@phosphor-icons/react';

const Education = () => {
  const educationData = [
    {
      year: '2022 - 2026',
      title: 'B.Tech CSE - IIMT Engineering College, Meerut',
      subtitle: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
      desc: 'Pursuing Bachelor of Technology in Computer Science & Engineering. Currently in the final 8th Semester. Mastering core fields including Data Structures, Algorithms, Database Management, Web Engineering, and System Design.'
    },
    {
      year: '2021 - 2022',
      title: 'Senior Secondary Education (XII)',
      subtitle: 'Modern Academy Senior Secondary School, Gulaothi (B.S.R)',
      desc: 'Completed XII standard with a focus on Physics, Chemistry, Mathematics, and Computer Science. Cultivated a solid logical and problem-solving analytical background.'
    },
    {
      year: '2019 - 2020',
      title: 'High School Matriculation (X)',
      subtitle: 'Modern Academy Senior Secondary School, Gulaothi (B.S.R)',
      desc: 'Finished X standard with excellent academic scores. Discovered a primary interest in computer logic systems, programming models, and algebra.'
    }
  ];

  const experienceData = [
    {
      year: '2024 - Present',
      title: 'Full-Stack Developer (Self-Employed / Independent Projects)',
      subtitle: 'Production-Ready Web Applications',
      desc: 'Independently designed, developed, and deployed multiple live production-ready MERN web platforms (Dizipay.in and Adfinxloan.com) currently in active real-world usage. Handled full-stack lifecycle, database design, secure JWT authentication, and cloud media services.'
    },
    {
      year: '2024 - 2025',
      title: 'Core Software Developer Trainee',
      subtitle: 'Java & Algorithms Study',
      desc: 'Strengthened core Java programming competencies, practicing Object-Oriented Design patterns, algorithm execution logic, database table design, and SQL query creation.'
    },
    {
      year: '2023 - 2024',
      title: 'UI Design & Web App Developer',
      subtitle: 'Front-End UI Systems',
      desc: 'Crafted structured and fully responsive web components using HTML5, CSS3, and modern CSS variables. Designed high-performance animations, fluid navigation structures, and interactive layouts.'
    }
  ];

  return (
    <section id="education" className="py-28 bg-brand-surface border-b border-brand-border relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-20 space-y-4">
          <span className="font-mono text-xs uppercase tracking-wider text-brand-accent font-semibold">
            Chronology
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-brand-primary font-serif">
            Education & <span className="font-serif italic text-brand-accent">Professional Journey</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education Column */}
          <div className="space-y-10">
            <div className="flex items-center gap-3.5 pb-2">
              <div className="p-2 bg-brand-bg border border-brand-border rounded-none shadow-lg">
                <GraduationCap size={22} className="text-brand-accent" />
              </div>
              <h3 className="text-2xl font-light text-brand-primary font-serif">Education</h3>
            </div>

            <div className="relative border-l border-brand-border pl-6 ml-4 space-y-10">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative space-y-2.5"
                >
                  {/* Timeline indicator circle */}
                  <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-brand-bg border-2 border-brand-accent" />
                  
                  <div className="flex items-center gap-2 text-[11px] font-bold text-brand-accent font-mono">
                    <Calendar size={12} />
                    <span>{item.year}</span>
                  </div>

                  <h4 className="text-lg font-light text-brand-primary font-serif">
                    {item.title}
                  </h4>
                  
                  <p className="text-xs font-semibold text-brand-secondary font-sans">
                    {item.subtitle}
                  </p>

                  <p className="text-sm text-brand-secondary leading-relaxed font-sans pt-1">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className="space-y-10">
            <div className="flex items-center gap-3.5 pb-2">
              <div className="p-2 bg-brand-bg border border-brand-border rounded-none shadow-lg">
                <Briefcase size={22} className="text-brand-accent" />
              </div>
              <h3 className="text-2xl font-light text-brand-primary font-serif">Experience & Training</h3>
            </div>

            <div className="relative border-l border-brand-border pl-6 ml-4 space-y-10">
              {experienceData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative space-y-2.5"
                >
                  {/* Timeline indicator circle */}
                  <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-brand-bg border-2 border-brand-accent" />
                  
                  <div className="flex items-center gap-2 text-[11px] font-bold text-brand-accent font-mono">
                    <Calendar size={12} />
                    <span>{item.year}</span>
                  </div>

                  <h4 className="text-lg font-light text-brand-primary font-serif">
                    {item.title}
                  </h4>
                  
                  <p className="text-xs font-semibold text-brand-secondary font-sans">
                    {item.subtitle}
                  </p>

                  <p className="text-sm text-brand-secondary leading-relaxed font-sans pt-1">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
