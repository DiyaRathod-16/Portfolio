import { navItems } from '../data/portfolioData';
import Icon from './Icon';

function Footer({ onNavigate }) {
  const navColumn = navItems.slice(0, 4);
  const secondaryColumn = navItems.slice(4);

  return (
    <footer className="bg-night pb-12 text-white">
      <div className="section-shell">
        <div className="rounded-b-[44px] border border-white/10 border-t-0 bg-[#1c1625] p-8 sm:p-10 lg:p-12">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-5xl font-black tracking-[-0.01em] text-white">
                Diya Rathod
              </p>
              <p className="mt-3 text-base text-white/55" style={{ letterSpacing: '0.05em' }}>
                Personal portfolio crafted with a Chromia-inspired UI system.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-night"
              style={{ letterSpacing: '0.1em' }}
            >
              View Projects
            </button>
          </div>

          <div className="grid gap-10 border-b border-white/10 py-10 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-2xl font-semibold text-white" style={{ letterSpacing: '0.05em' }}>Navigation</h3>
              <div className="mt-5 space-y-3">
                {navColumn.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className="block text-left text-white/62 transition hover:text-white"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white" style={{ letterSpacing: '0.05em' }}>More</h3>
              <div className="mt-5 space-y-3">
                {secondaryColumn.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className="block text-left text-white/62 transition hover:text-white"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white" style={{ letterSpacing: '0.05em' }}>Build Stack</h3>
              <div className="mt-5 space-y-3 text-white/62">
                <p>React</p>
                <p>Tailwind CSS</p>
                <p>Framer Motion</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-8">
            <p className="text-sm text-white/45" style={{ letterSpacing: '0.05em' }}>
              {'\u00A9'} 2026 Diya Rathod. Built with React, Tailwind CSS, and Framer Motion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
