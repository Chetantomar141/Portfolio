import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, ShieldCheck } from '@phosphor-icons/react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap size={20} className="text-brand-accent" />,
      title: 'Academic Foundation',
      desc: 'B.Tech in Computer Science & Engineering (8th Semester), Dr. A.P.J. Abdul Kalam Technical University.',
    },
    {
      icon: <Code size={20} className="text-brand-accent" />,
      title: 'Full Stack Engineering',
      desc: 'Hands-on competence spanning secure RESTful APIs, relational schema normalizations, and UI frameworks.',
    },
    {
      icon: <ShieldCheck size={20} className="text-brand-accent" />,
      title: 'Production Experience',
      desc: 'Independently built and deployed live platforms solving real operations and payments flow.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-brand-bg border-b border-brand-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="mb-12 space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-brand-accent font-semibold">
            About Me
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-primary">
            Engineering Clean & Reliable Systems
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context Profile */}
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-lg font-semibold text-brand-primary">
              Full Stack Software Developer based in Meerut, India.
            </h3>
            <p className="text-sm md:text-base text-brand-secondary leading-relaxed font-sans">
              I have recently completed my B.Tech in Computer Science & Engineering (8th Semester). Over the course of my academic journey, I have developed a strong passion for designing and building end-to-end full stack web applications.
            </p>
            <p className="text-sm md:text-base text-brand-secondary leading-relaxed font-sans">
              My engineering philosophy focuses on production-grade reliability: writing highly maintainable React components, creating optimized database tables with strong relational normalizations, and implementing secure APIs with JWT authorization.
            </p>
            <p className="text-sm md:text-base text-brand-secondary leading-relaxed font-sans">
              I independently built and deployed live platforms (Dizipay, Adfinx Loan) that solve real business needs, validating my skills in server hosting, Nginx proxies, PM2 server monitors, and Cloudinary media CDNs.
            </p>
          </div>

          {/* Right Column: Clean Metric Highlights List */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex flex-col gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-brand-surface border border-brand-border p-5 rounded-lg transition-all duration-150 hover:border-brand-accent/20"
                  data-testid={`about-highlight-${index}`}
                >
                  <div className="flex gap-4 items-start">
                    <div className="p-2 bg-brand-bg border border-brand-border rounded-md shadow-sm">
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-brand-primary">
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-sm text-brand-secondary leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
