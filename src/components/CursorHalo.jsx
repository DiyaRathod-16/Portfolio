import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

function CursorHalo() {
  const x = useMotionValue(-160);
  const y = useMotionValue(-160);
  const smoothX = useSpring(x, { stiffness: 140, damping: 22, mass: 0.7 });
  const smoothY = useSpring(y, { stiffness: 140, damping: 22, mass: 0.7 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');

    if (!mediaQuery.matches) {
      setEnabled(false);
      return undefined;
    }

    const handleMove = (event) => {
      x.set(event.clientX - 80);
      y.set(event.clientY - 80);
    };

    setEnabled(true);
    window.addEventListener('mousemove', handleMove);

    return () => window.removeEventListener('mousemove', handleMove);
  }, [x, y]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[6] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.08)_0%,rgba(99,102,241,0.03)_48%,transparent_76%)] blur-3xl"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}

export default CursorHalo;

