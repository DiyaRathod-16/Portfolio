import { experienceTimeline } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';

const experience = experienceTimeline[0];

const milestones = [
  {
    tag: 'Collaboration',
    title: 'Worked across teams',
    description: experience.points[0],
    tone: 'bg-green',
    halo: 'bg-green/35',
  },
  {
    tag: 'Delivery',
    title: 'Built better solutions',
    description: experience.points[1],
    tone: 'bg-accent',
    halo: 'bg-accent/25',
  },
  {
    tag: 'Problem Solving',
    title: 'Applied practical thinking',
    description: experience.points[2],
    tone: 'bg-pink',
    halo: 'bg-pink/25',
  },
];

function Experience() {
  return (
    <AnimatedSection id="experience" className="relative overflow-hidden bg-night py-16 text-white sm:py-20 lg:py-24">
      <div className="absolute inset-0 dot-grid-dark opacity-45" />
      <div className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-pink/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-24 h-[460px] w-[460px] rounded-full bg-accent/20 blur-3xl" />

      <div className="section-shell relative">
        <div className="mx-auto max-w-5xl text-center">
          <span
            className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold uppercase text-white/70"
            style={{ letterSpacing: '0.45em' }}
          >
            Experience
          </span>
          <h2 className="mt-8 font-display text-[clamp(4rem,10vw,7rem)] font-black leading-[0.92] tracking-[-0.01em] text-white">
            Experience
          </h2>
          <p className="mt-5 text-lg text-white/68">
            {experience.company} | {experience.role}
          </p>
        </div>

        <div className="mt-12 overflow-x-auto pb-4">
          <div className="min-w-[980px] px-4">
            <div className="relative grid grid-cols-3 gap-10 pt-6">
              <div className="absolute left-0 right-0 top-[5.65rem] h-[2px] bg-[#e2b9ff]" />

              {milestones.map((item, index) => (
                <div key={item.title} className="relative text-center">
                  <div
                    className={`mx-auto inline-flex rounded-full px-5 py-3 text-lg font-semibold text-night ${
                      index === 0 ? 'bg-green' : index === 1 ? 'bg-accent' : 'bg-pink'
                    }`}
                  >
                    {item.tag}
                  </div>

                  <div className="relative z-10 mt-8 flex justify-center">
                    <div className={`absolute h-20 w-20 rounded-full ${item.halo}`} />
                    <div
                      className={`relative mt-4 h-10 w-10 rounded-full border-4 border-[#f7f1ee] ${
                        item.tone
                      }`}
                    />
                  </div>

                  <div className="mt-10">
                    <h3 className="text-[2.7rem] font-black leading-[0.95] tracking-[-0.03em] text-white">
                      {item.title}
                    </h3>
                    <p className="mx-auto mt-6 max-w-sm text-lg leading-9 text-white/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Experience;

