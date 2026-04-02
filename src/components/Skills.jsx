import { skillGroups } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';
import Icon from './Icon';

function SkillTable({ groups }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[28px] border border-line bg-white shadow-panel">
      <table className="w-full border-separate border-spacing-0">
        <thead className="bg-surface/95">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Category
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Skills
            </th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group, index) => (
            <tr key={group.title} className={index === 0 ? '' : 'border-t border-line'}>
              <td className="px-6 py-5 align-top">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2ebe7] text-night">
                    <Icon name={group.icon} />
                  </div>
                  <p className="text-lg font-black tracking-[-0.02em] text-ink">
                    {group.title}
                  </p>
                </div>
              </td>
              <td className="px-6 py-5 align-top text-sm leading-7 text-muted">
                {group.skills.join(', ')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Skills() {
  const splitIndex = Math.ceil(skillGroups.length / 2);
  const leftGroups = skillGroups.slice(0, splitIndex);
  const rightGroups = skillGroups.slice(splitIndex);

  return (
    <AnimatedSection
      id="skills"
      className="light-section relative overflow-hidden section-space bg-[linear-gradient(180deg,#f8f2ee_0%,#f5eee8_100%)]"
    >
      <div className="absolute inset-0 dot-grid-light opacity-20" />

      <div className="section-shell relative">
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow">Skills</span>
          <h2 className="light-heading mt-8 font-display text-[clamp(4rem,10vw,7rem)] font-black leading-[0.92] tracking-[0.02em]">
            Toolkit
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
            A practical stack for modern development, hackathon speed, and long-term product
            building.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-2 lg:items-stretch">
          <SkillTable groups={leftGroups} />
          <SkillTable groups={rightGroups} />
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Skills;
