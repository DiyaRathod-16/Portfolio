import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { contactCards } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';
import Icon from './Icon';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
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

const initialFormState = {
  name: '',
  email: '',
  message: '',
};

function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const formRef = useRef(null);

  useEffect(() => {
    emailjs.init('lPKIte8U3d5HXpTxr');
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formRef.current) {
      return;
    }

    try {
      await emailjs.sendForm('service_vi2cz7r', 'template_xc5cb95', formRef.current);
      alert('✨ Message sent successfully!');
      setFormData(initialFormState);
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again in a moment.');
    }
  };

  return (
    <AnimatedSection
      id="contact"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#140f1b_0%,#181324_42%,#241732_100%)] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="absolute inset-0 dot-grid-dark opacity-30" />
      <div className="pointer-events-none absolute -left-28 top-16 h-72 w-72 rounded-full bg-pink/18 blur-3xl contact-orb-slow" />
      <div className="pointer-events-none absolute right-[-5rem] top-10 h-[20rem] w-[20rem] rounded-full bg-accent/16 blur-3xl contact-orb-fast" />
      <div className="pointer-events-none absolute bottom-[-6rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <div className="section-shell relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.24 }}
          variants={containerVariants}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={itemVariants}>
            <span className="eyebrow border-white/10 bg-white/[0.08] text-white/70">Contact</span>
            <h2 className="hero-display mx-auto mt-6 inline-block whitespace-nowrap text-[clamp(2.25rem,3.4vw,4rem)] font-black leading-[0.92] tracking-[-0.055em] text-white">
              Let&apos;s build something meaningful together.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              Open to collaborations, internships, and product conversations. Reach out if you
              want something clear, polished, and useful.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.24 }}
          variants={containerVariants}
          className="mx-auto mt-12 grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-start lg:gap-10"
        >
          <motion.div
            variants={itemVariants}
            className="flex h-fit flex-col rounded-[34px] border border-white/10 bg-white/[0.06] p-5 shadow-[0_30px_90px_-48px_rgba(7,6,12,0.78)] backdrop-blur-2xl sm:p-7 lg:h-fit lg:self-start lg:p-8"
          >
            <div className="grid gap-4">
              {contactCards.map((item) => (
                <motion.a
                  key={item.label}
                  variants={itemVariants}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  className="group relative flex w-full items-center gap-4 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.08] p-5 shadow-[0_18px_50px_-34px_rgba(10,8,15,0.8)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.12] sm:p-6"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_34%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-white shadow-[0_12px_28px_-20px_rgba(255,255,255,0.35)] transition duration-300 group-hover:scale-105 group-hover:bg-white/[0.14]">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <p className="text-[11px] uppercase tracking-[0.32em] text-white/42 sm:text-xs">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-7 text-white sm:text-base lg:whitespace-nowrap">
                      {item.value}
                    </p>
                  </div>
                  <div className="hidden text-white/35 transition duration-300 group-hover:text-white sm:block">
                    <Icon name="arrowUpRight" className="h-4 w-4" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex h-fit flex-col rounded-[34px] border border-white/10 bg-white/[0.07] p-4 shadow-[0_30px_90px_-48px_rgba(7,6,12,0.78)] backdrop-blur-2xl sm:p-5 lg:self-start lg:p-5"
          >
            <div className="relative flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-4 sm:p-5 lg:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_24%)]" />

              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/45">Start a project</p>
                  <h3 className="mt-3 font-display text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
                    Send a message
                  </h3>
                </div>

                <div className="hidden h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-white/75 sm:flex">
                  <Icon name="spark" className="h-6 w-6" />
                </div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="relative mt-5 flex flex-col space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-3 block text-sm font-medium text-white/78">Name</span>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-[20px] border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-white/34 focus:border-pink/55 focus:bg-white/[0.08] focus:shadow-[0_0_0_4px_rgba(168,85,247,0.12)]"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-3 block text-sm font-medium text-white/78">Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full rounded-[20px] border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-white/34 focus:border-pink/55 focus:bg-white/[0.08] focus:shadow-[0_0_0_4px_rgba(168,85,247,0.12)]"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-3 block text-sm font-medium text-white/78">Message</span>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell me about your idea, timeline, or the role you have in mind."
                    className="min-h-[6rem] w-full rounded-[20px] border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-white/34 focus:border-pink/55 focus:bg-white/[0.08] focus:shadow-[0_0_0_4px_rgba(168,85,247,0.12)]"
                  />
                </label>

                <button
                  type="submit"
                  className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-16px_rgba(168,85,247,0.55)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_24px_50px_-14px_rgba(168,85,247,0.72)]"
                >
                  <span className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.32),transparent)] transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative flex items-center gap-2">
                    Send Message
                    <Icon name="arrowUpRight" className="h-4 w-4" />
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

export default Contact;

