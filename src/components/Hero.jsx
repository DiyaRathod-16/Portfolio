import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Hero({ onPrimaryClick, onSecondaryClick }) {
  return (
    <section
      id="home"
      data-section
      className="relative overflow-hidden bg-[linear-gradient(135deg,#f7f1ee_0%,#f1e7e4_34%,#e8e1ea_62%,#17131f_100%)] pb-16 pt-28 text-ink sm:pt-32 lg:pb-20 lg:pt-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(251,125,165,0.18),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(192,132,252,0.16),transparent_22%),radial-gradient(circle_at_72%_80%,rgba(255,255,255,0.36),transparent_18%)]" />
      <div className="absolute inset-0 dot-grid-light opacity-20" />
      <div className="pointer-events-none absolute -left-28 top-20 h-[20rem] w-[20rem] rounded-full bg-pink/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-4rem] top-36 h-[24rem] w-[24rem] rounded-full bg-night/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-5rem] left-1/2 h-[18rem] w-[18rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />

      <div className="section-shell relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
        >
          <div className="max-w-3xl">
            <motion.p
              variants={itemVariants}
              className="inline-flex items-center rounded-full border border-line bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.45em] text-muted shadow-soft backdrop-blur"
            >
              Hi, I&apos;m Diya Rathod
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="hero-display mt-6 max-w-[13ch] text-[clamp(3.3rem,7.1vw,7rem)] font-black leading-[0.88] tracking-[-0.05em] text-ink sm:max-w-[12ch]"
            >
              Built to work. Built to matter.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl text-lg leading-9 text-muted sm:text-xl"
            >
              Blending AI, web development, and structured thinking to build scalable,
              user-first digital experiences.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onPrimaryClick}
                className="rounded-full border border-line bg-white/80 px-7 py-3 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-r hover:from-pink hover:to-accent hover:text-white hover:shadow-lift"
              >
                View Projects
              </button>
              <button
                type="button"
                onClick={onSecondaryClick}
                className="rounded-full border border-line bg-white/75 px-7 py-3 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-r hover:from-pink hover:to-accent hover:text-white hover:shadow-lift"
              >
                Contact Me
              </button>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative justify-self-center lg:justify-self-end">
            <div className="pointer-events-none absolute -left-10 top-12 h-28 w-28 rounded-full bg-pink/25 blur-3xl" />
            <div className="pointer-events-none absolute -right-8 bottom-8 h-36 w-36 rounded-full bg-accent/25 blur-3xl" />

            <div className="relative overflow-hidden rounded-[34px] border border-white/30 bg-white/20 p-4 shadow-[0_30px_120px_-55px_rgba(25,21,32,0.55)] backdrop-blur-2xl sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.45),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(192,132,252,0.14),transparent_28%)]" />
              <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.24),rgba(255,255,255,0.10))] p-3">
                <div className="overflow-hidden rounded-[24px] bg-[#1b1624]">
                  <img
                    src="/ppic.jpeg"
                    alt="Diya Rathod profile portrait"
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </div>

                <div className="mt-3 flex items-center justify-between gap-4 rounded-[22px] border border-white/40 bg-white/45 px-4 py-3 text-ink shadow-soft backdrop-blur">
                  <p className="hero-display whitespace-nowrap text-[0.95rem] font-black uppercase tracking-[0.18em] text-muted">
                    Diya Rathod
                  </p>
                  <p className="whitespace-nowrap text-sm font-medium text-ink/80">AI + Web builder</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
