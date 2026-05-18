import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from '@phosphor-icons/react';

const Footer = () => {
  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-brand-surface border-t border-brand-border py-8 px-6 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-xs font-medium text-brand-secondary text-center sm:text-left">
          <p>
            Copyright &copy; {new Date().getFullYear()} Chetan Tomar. All Rights Reserved.
          </p>
        </div>

        <motion.div whileHover={{ y: -1 }} className="inline-flex">
          <a
            href="#"
            onClick={handleScrollTop}
            title="Back to Top"
            className="inline-flex justify-center items-center w-8 h-8 bg-brand-bg border border-brand-border rounded-md text-brand-secondary hover:text-brand-accent hover:border-brand-accent/20 hover:shadow-sm transition-all duration-150"
            data-testid="footer-scroll-top-btn"
          >
            <ArrowUp size={14} weight="bold" />
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
