import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? 'home');

  useEffect(() => {
    const headerOffset = 96;
    const activationOffset = Math.min(window.innerHeight * 0.32, 320);
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sectionElements.length) {
      return undefined;
    }

    let frameId = 0;

    const updateActiveSection = () => {
      const probePoint = window.scrollY + headerOffset + activationOffset;
      let currentSectionId = sectionElements[0]?.id ?? sectionIds[0] ?? 'home';

      for (const section of sectionElements) {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (probePoint >= top && probePoint < bottom) {
          currentSectionId = section.id;
          break;
        }

        if (probePoint >= top) {
          currentSectionId = section.id;
        }
      }

      setActiveSection(currentSectionId);
    };

    const onScrollOrResize = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [sectionIds]);

  return activeSection;
}
