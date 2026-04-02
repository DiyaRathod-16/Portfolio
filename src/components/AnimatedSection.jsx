import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function AnimatedSection({ children, className = '', id }) {
  return (
    <motion.section
      id={id}
      data-section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;

