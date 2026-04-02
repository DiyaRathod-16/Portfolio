import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { navItems } from '../data/portfolioData';
import Icon from './Icon';

function Navbar({ activeSection, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (sectionId) => {
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent px-4 py-2.5 sm:px-6 sm:py-3">
      <div className="section-shell">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-night px-4 py-3 text-white shadow-[0_20px_60px_-34px_rgba(25,21,32,0.45)] sm:px-5">
          <button
            type="button"
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-3 rounded-full px-3 py-1 text-left transition hover:bg-white/[0.05]"
          >
            <span className="font-display text-[1.75rem] font-black tracking-[-0.02em] text-white">
              DR
            </span>
            <span className="hidden text-sm font-medium text-white/70 sm:inline" style={{ letterSpacing: '0.08em' }}>Diya Rathod</span>
          </button>

          <div className="hidden items-center gap-1 rounded-full border border-white/5 bg-white/[0.03] px-1.5 py-1 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(item.id)}
                  className={`nav-pill ${isActive ? 'nav-pill-active' : 'nav-pill-inactive'}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <a
            href="mailto:diya16.rathod@gmail.com"
            className="hidden items-center justify-center rounded-full border border-white/10 bg-white px-8 py-3 text-sm font-semibold text-night transition hover:brightness-95 lg:inline-flex"
          >
            Get Started
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-night text-white lg:hidden"
            aria-label="Toggle navigation menu"
          >
            <Icon name={isMenuOpen ? 'close' : 'menu'} />
          </button>
        </nav>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              className="mx-auto mt-4 max-w-3xl rounded-[28px] border border-white/10 bg-night p-4 shadow-panel lg:hidden"
            >
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavigate(item.id)}
                    className={`nav-pill-mobile ${activeSection === item.id ? 'nav-pill-mobile-active' : 'nav-pill-mobile-inactive'}`}
                  >
                    {item.label}
                  </button>
                ))}
                <a href="mailto:diya16.rathod@gmail.com" className="button-primary mt-2 w-full">
                  Contact Me
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Navbar;

