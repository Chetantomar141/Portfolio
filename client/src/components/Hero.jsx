import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, EnvelopeSimple } from '@phosphor-icons/react';

const Hero = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-brand-bg pt-32 pb-20 border-b border-brand-border flex items-center min-h-[85vh]"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Clean, fully aligned 12-column grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Aligned Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 bg-brand-surface border border-brand-border px-3 py-1 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              <span className="font-mono text-xs font-medium text-brand-secondary">
                Available for Full-time Roles
              </span>
            </motion.div>

            {/* Name & Role */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-primary font-sans leading-none"
              >
                Chetan Tomar
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-xl md:text-2xl font-semibold text-brand-accent font-sans"
              >
                Full Stack Developer
              </motion.h2>
            </div>

            {/* Value Statement */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-base md:text-lg text-brand-secondary leading-relaxed max-w-xl font-sans"
            >
              Computer Science & Engineering graduate specializing in designing, scaling, and deploying live, production-ready web applications. I focus on clean user interfaces, secure database schemas, and robust backend architectures.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, '#projects')}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-accent hover:bg-brand-accent/90 text-white font-medium text-sm rounded-md transition-colors duration-150 gap-2 shadow-sm"
                data-testid="hero-view-work-btn"
              >
                View Projects <ArrowRight size={14} weight="bold" />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-transparent hover:bg-brand-surface text-brand-primary border border-brand-border hover:border-brand-borderHover font-medium text-sm rounded-md transition-colors duration-150 gap-2 shadow-sm"
                data-testid="hero-contact-btn"
              >
                Contact Me <EnvelopeSimple size={14} weight="bold" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Clean Corporate Framed Image (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative max-w-sm w-full">
              <div className="bg-brand-surface border border-brand-border p-3.5 rounded-2xl shadow-lg transition-all duration-300 hover:border-brand-accent/25 hover:shadow-xl group">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-brand-bg relative">
                  <img
                    src="/chetan.jpg"
                    alt="Chetan Tomar"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-brand-bg/5 pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
