import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';
import Icon from './Icon';

function Projects() {
  return (
    <AnimatedSection id="projects" className="relative overflow-hidden bg-night py-16 text-white sm:py-20 lg:py-24">
      <div className="absolute inset-0 dot-grid-dark opacity-45" />
      <div className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-pink/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-24 h-[460px] w-[460px] rounded-full bg-accent/20 blur-3xl" />

      <div className="section-shell relative">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <span
              className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold uppercase text-white/70"
              style={{ letterSpacing: '0.45em' }}
            >
              Projects
            </span>

            <h2 className="mt-8 font-display text-[clamp(3.6rem,8vw,6.1rem)] font-black leading-[0.92] tracking-[-0.01em] text-white">
              Product-ready builds.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-white/68">
              From idea to impact—built with crisp UI, thoughtful UX, and code you can trust.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <span className="rounded-full border border-pink/30 bg-pink/15 px-4 py-2 text-sm text-white/85">
                Responsive UI
              </span>
              <span className="rounded-full border border-accent/30 bg-accent/15 px-4 py-2 text-sm text-white/85">
                Team Collaboration
              </span>
              <span className="rounded-full border border-green/30 bg-green/15 px-4 py-2 text-sm text-white/85">
                Deployments
              </span>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-lift sm:p-6"
              >
                <div
                  className={`pointer-events-none absolute inset-0 opacity-70 transition duration-300 group-hover:opacity-95 ${
                    index % 2 === 0
                      ? 'bg-gradient-to-br from-pink/18 via-accent/10 to-green/14'
                      : 'bg-gradient-to-br from-accent/18 via-pink/10 to-green/12'
                  }`}
                />
                <div className="pointer-events-none absolute inset-0 bg-night/40" />

                <div className="relative flex flex-col gap-5">
                  <div className="flex flex-wrap items-center gap-3 min-w-0">
                    <span
                      className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase text-white/75"
                      style={{ letterSpacing: '0.22em' }}
                    >
                      Project {project.id}
                    </span>
                    <span
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/70 min-w-0"
                      style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 1,
                        overflow: 'hidden',
                      }}
                    >
                      {project.subtitle}
                    </span>
                  </div>

                  <div>
                    <h3
                      className="text-3xl font-black leading-[1.02] tracking-[-0.03em] text-white"
                      style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,
                        overflow: 'hidden',
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="mt-4 text-sm leading-7 text-white/78 sm:text-base"
                      style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 4,
                        overflow: 'hidden',
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-1">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink to-accent px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lift"
                        style={{ letterSpacing: '0.12em' }}
                      >
                        <span className="uppercase">{link.label}</span>
                        <Icon name="arrowUpRight" className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Projects;

