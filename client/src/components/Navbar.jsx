import React, { useState, useEffect } from 'react';
import { List, X, PaperPlaneTilt } from '@phosphor-icons/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        isScrolled
          ? 'py-3.5 bg-brand-bg/95 backdrop-blur-md border-b border-brand-border shadow-md'
          : 'py-5 bg-brand-bg border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="text-lg font-bold tracking-tight text-brand-primary"
          data-testid="logo-link"
        >
          Chetan Tomar<span className="text-brand-accent">.</span>
        </a>

        {/* Desktop Navbar Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.href.substring(1)
                  ? 'text-brand-accent'
                  : 'text-brand-secondary hover:text-brand-primary'
              }`}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="inline-flex items-center justify-center px-4 py-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-medium text-sm rounded-md transition-all duration-150 gap-2 shadow-sm"
            data-testid="nav-cta-btn"
          >
            Hire Me <PaperPlaneTilt size={14} weight="bold" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-brand-primary focus:outline-none p-1"
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <List size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-bg border-b border-brand-border">
          <div className="px-6 py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-semibold py-2.5 transition-colors border-b border-brand-border/40 last:border-0 ${
                  activeSection === link.href.substring(1)
                    ? 'text-brand-accent'
                    : 'text-brand-primary hover:text-brand-accent'
                }`}
                data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold text-sm rounded-md gap-2"
                data-testid="mobile-nav-cta-btn"
              >
                Hire Me <PaperPlaneTilt size={14} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
