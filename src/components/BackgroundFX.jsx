import { motion } from 'framer-motion';

function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#17131f_0%,#17131f_100%)]" />

      <div className="absolute inset-0 bg-dots bg-[length:38px_38px] opacity-[0.08] grid-mask" />

      <motion.div
        className="absolute -left-24 top-10 h-[18rem] w-[18rem] rounded-full bg-[rgba(236,72,153,0.06)] blur-[100px]"
        animate={{ x: [0, 10, 0], y: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-6rem] top-[12%] h-[18rem] w-[18rem] rounded-full bg-[rgba(99,102,241,0.06)] blur-[110px]"
        animate={{ x: [0, -8, 0], y: [0, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export default BackgroundFX;

