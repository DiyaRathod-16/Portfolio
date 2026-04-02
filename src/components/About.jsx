import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function About() {
  return (
    <AnimatedSection
      id="about"
      className="light-section relative overflow-hidden section-space bg-[linear-gradient(180deg,#f8f2ee_0%,#f5eee8_100%)]"
    >
      <div className="absolute inset-0 dot-grid-light opacity-20" />
      <div className="pointer-events-none absolute -left-24 top-14 h-64 w-64 rounded-full bg-pink/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-5rem] top-24 h-80 w-80 rounded-full bg-night/6 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-6rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/12 blur-3xl" />

      <div className="section-shell relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.28 }}
          variants={containerVariants}
          className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:items-start lg:gap-20"
        >
          <motion.div variants={itemVariants} className="max-w-3xl lg:pt-4">
            <span className="eyebrow">About</span>
            <h2
              className="hero-display mt-8 max-w-[11ch] text-[clamp(3rem,5.6vw,6rem)] font-black leading-[0.88] tracking-[-0.05em] text-ink sm:max-w-[10ch]"
              style={{ textWrap: 'balance' }}
            >
              Intentional work, driven by curiosity and clarity.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-9 text-muted sm:text-xl sm:leading-10">
              I&apos;m a B.Tech Computer Science student focused on building thoughtful digital
              products with AI, web development, and structured thinking. I care about systems
              that feel elegant to use and practical to maintain.
            </p>

            <div className="mt-10 flex flex-nowrap gap-2 overflow-x-auto pb-1 sm:gap-3 sm:overflow-visible">
              {['AI-first thinking', 'Clean code', 'Problem solving', 'Collaboration'].map((tag) => (
                <span
                  key={tag}
                  className="shrink-0 whitespace-nowrap rounded-full border border-line bg-white/82 px-3 py-2 text-[13px] font-medium text-ink shadow-soft backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:bg-white hover:shadow-lift sm:px-4 sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative flex flex-col gap-5 lg:min-h-[42rem] lg:items-end lg:pt-20"
          >
            <motion.div
              variants={itemVariants}
              className="about-float-slow relative w-full lg:w-full lg:max-w-[32rem]"
            >
              <motion.article
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="about-card-glow dark-surface relative w-full rounded-[30px] border border-black/20 bg-[#0f0c14] p-6 text-white backdrop-blur-xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">AI-first</p>
                <p className="mt-3 text-lg font-semibold leading-8 text-white">
                  Curious about what makes products smarter and more useful.
                </p>
              </motion.article>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="about-float-medium relative w-full lg:w-full lg:max-w-[32rem]"
            >
              <motion.article
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="about-card-glow dark-surface relative w-full rounded-[30px] border border-black/20 bg-[#0b0910] p-6 text-white backdrop-blur-xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Clean code</p>
                <p className="mt-3 text-lg font-semibold leading-8 text-white">
                  Build systems that stay readable, scalable, and calm under pressure.
                </p>
              </motion.article>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="about-float-fast relative w-full lg:w-full lg:max-w-[32rem]"
            >
              <motion.article
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="about-card-glow dark-surface relative w-full rounded-[30px] border border-black/20 bg-[#121018] p-6 text-white backdrop-blur-xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Collaboration</p>
                <p className="mt-3 text-lg font-semibold leading-8 text-white">
                  Turn feedback into momentum and ideas into shipped work.
                </p>
              </motion.article>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

export default About;

