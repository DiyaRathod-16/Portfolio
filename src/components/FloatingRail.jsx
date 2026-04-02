import Icon from './Icon';

function FloatingRail({ onNavigate }) {
  const actions = [
    {
      key: 'top',
      icon: 'chevronUp',
      label: 'Back to top',
      onClick: () => onNavigate('home'),
    },
    {
      key: 'projects',
      icon: 'arrowUpRight',
      label: 'Projects',
      onClick: () => onNavigate('projects'),
    },
    {
      key: 'github',
      icon: 'github',
      label: 'GitHub',
      href: 'https://github.com/DiyaRathod-16',
    },
    {
      key: 'mail',
      icon: 'mail',
      label: 'Email',
      href: 'mailto:diya16.rathod@gmail.com',
    },
  ];

  return (
    <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
      <div className="flex flex-col items-center gap-2 rounded-[28px] border border-[#ffffff1a] bg-white/80 px-2 py-3 shadow-[0_20px_50px_-32px_rgba(25,21,32,0.28)] backdrop-blur">
        {actions.map((action) =>
          action.href ? (
            <a
              key={action.key}
              href={action.href}
              target={action.href.startsWith('http') ? '_blank' : undefined}
              rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={action.label}
              className="flex h-11 w-11 items-center justify-center rounded-full text-[#2b2235] transition hover:bg-[#191520] hover:text-white"
            >
              <Icon name={action.icon} className="h-5 w-5" />
            </a>
          ) : (
            <button
              key={action.key}
              type="button"
              onClick={action.onClick}
              aria-label={action.label}
              className="flex h-11 w-11 items-center justify-center rounded-full text-[#2b2235] transition hover:bg-[#191520] hover:text-white"
            >
              <Icon name={action.icon} className="h-5 w-5" />
            </button>
          ),
        )}
      </div>
    </div>
  );
}

export default FloatingRail;

