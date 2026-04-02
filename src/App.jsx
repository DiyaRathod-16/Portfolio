import { useEffect, useState } from 'react';
import About from './components/About';
import Achievements from './components/Achievements';
import BackgroundFX from './components/BackgroundFX';
import Contact from './components/Contact';
import Experience from './components/Experience';
import FloatingRail from './components/FloatingRail';
import Hero from './components/Hero';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { navItems } from './data/portfolioData';
import { useActiveSection } from './hooks/useActiveSection';

const SECTION_IDS = navItems.map((item) => item.id);
const HEADER_OFFSET = 96;

let activeScrollFrameId = 0;

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const scrollToY = (targetY) => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    window.scrollTo(0, targetY);
    return;
  }

  window.cancelAnimationFrame(activeScrollFrameId);

  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = Math.min(1100, Math.max(650, Math.abs(distance) * 0.55));
  const startTime = performance.now();

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * easedProgress);

    if (progress < 1) {
      activeScrollFrameId = window.requestAnimationFrame(animate);
    }
  };

  activeScrollFrameId = window.requestAnimationFrame(animate);
};

function App() {
  const activeSection = useActiveSection(SECTION_IDS);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 900);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const targetY = section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    scrollToY(targetY);
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-night font-body text-ink">
      <BackgroundFX />
      <Loader isLoading={isLoading} />
      <FloatingRail onNavigate={scrollToSection} />

      <div className="relative z-10">
        <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

        <main className="w-full">
          <Hero
            onPrimaryClick={() => scrollToSection('projects')}
            onSecondaryClick={() => scrollToSection('contact')}
          />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Achievements />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
