import { AnimatePresence, motion } from 'framer-motion';

function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeOut' } }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-white"
        >
          <div className="relative flex flex-col items-center gap-5">
            <motion.div
              className="absolute h-36 w-36 rounded-full bg-[rgba(99,102,241,0.08)] blur-[80px]"
              animate={{ opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-20 w-20 items-center justify-center rounded-[24px] border border-line bg-white font-display text-2xl font-semibold tracking-[-0.01em] text-ink shadow-panel"
            >
              DR
            </motion.div>

            <div className="flex items-center gap-2">
              {[0, 1, 2].map((item) => (
                <motion.span
                  key={item}
                  className="h-2 w-2 rounded-full bg-slate-900/70"
                  animate={{ opacity: [0.2, 1, 0.2], y: [0, -3, 0] }}
                  transition={{
                    duration: 0.9,
                    delay: item * 0.12,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default Loader;
