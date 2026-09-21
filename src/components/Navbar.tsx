import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Mail, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  activeSection: string;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Profiles', href: '#profiles' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        id="main-navigation"
        aria-label="Main Navigation"
        className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-6 px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 shadow-xl ${
          scrolled
            ? 'glass-panel shadow-[0_8px_32px_rgba(0,0,0,0.35)]'
            : 'bg-[var(--nav-bg)] border border-[var(--nav-border)] backdrop-blur-xl'
        } max-w-5xl w-full mx-auto`}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          id="nav-brand-logo"
          onClick={(e) => handleScrollTo(e, '#home')}
          className="group flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] rounded-full px-2 py-1"
        >
          <span className="font-heading font-extrabold text-xl tracking-tight bg-gradient-to-r from-[#8B5CF6] via-[#C4A5FF] to-[#22D3EE] bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
            Diya
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#C4A5FF] animate-pulse" />
        </a>

        {/* Center Desktop Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`relative px-3 py-1.5 text-xs lg:text-sm font-medium transition-colors rounded-full whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] ${
                  isActive
                    ? 'text-white dark:text-[#F5EFFF] font-semibold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activePillIndicator"
                    className="absolute inset-0 bg-[#8B5CF6] rounded-full -z-10 shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right Actions: Contact & Theme Toggle & Mobile Hamburger */}
        <div className="flex items-center gap-2">
          
          <a
            href="#contact"
            id="nav-contact-button"
            onClick={(e) => handleScrollTo(e, '#contact')}
            aria-label="Contact Diya"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-[#8B5CF6]/15 hover:bg-[#8B5CF6] text-[#C4A5FF] hover:text-white border border-[#8B5CF6]/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* <button
            id="nav-theme-toggle-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 dark:bg-white/5 border border-[var(--card-border)] text-[#C4A5FF] hover:text-[#8B5CF6] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-purple-700" />
            )}
          </button> */}

          <button
            id="nav-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-[var(--card-border)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            id="mobile-navigation-drawer"
            className="pointer-events-auto absolute top-16 left-4 right-4 max-w-md mx-auto glass-panel p-5 rounded-3xl shadow-2xl border border-[var(--card-border)] flex flex-col gap-2 md:hidden"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`mobile-nav-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-[#8B5CF6] text-white font-semibold'
                      : 'text-[var(--text-primary)] hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-white" />}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
