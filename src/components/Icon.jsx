function Icon({ name, className = 'h-5 w-5' }) {
  const sharedProps = {
    className,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    viewBox: '0 0 24 24',
  };

  switch (name) {
    case 'spark':
      return (
        <svg {...sharedProps}>
          <path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Z" />
          <path d="M5 4v2" />
          <path d="M4 5h2" />
          <path d="M19 17v4" />
          <path d="M17 19h4" />
        </svg>
      );
    case 'target':
      return (
        <svg {...sharedProps}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <path d="M20 4 15 9" />
          <path d="M16 4h4v4" />
        </svg>
      );
    case 'trophy':
      return (
        <svg {...sharedProps}>
          <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" />
          <path d="M6 6H4a2 2 0 0 0 2 2" />
          <path d="M18 6h2a2 2 0 0 1-2 2" />
          <path d="M12 12v4" />
          <path d="M9 20h6" />
          <path d="M8 16h8" />
        </svg>
      );
    case 'code':
      return (
        <svg {...sharedProps}>
          <path d="m8 8-4 4 4 4" />
          <path d="m16 8 4 4-4 4" />
          <path d="m14 4-4 16" />
        </svg>
      );
    case 'layout':
      return (
        <svg {...sharedProps}>
          <rect x="3" y="4" width="18" height="16" rx="2.5" />
          <path d="M3 10h18" />
          <path d="M9 20V10" />
        </svg>
      );
    case 'database':
      return (
        <svg {...sharedProps}>
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
          <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </svg>
      );
    case 'brain':
      return (
        <svg {...sharedProps}>
          <path d="M10.5 4.5a3 3 0 0 0-5 2.2A3.5 3.5 0 0 0 4 13a3 3 0 0 0 2.5 5.4A3 3 0 0 0 11 20V8.5a4 4 0 0 0-.5-4Z" />
          <path d="M13.5 4.5a3 3 0 0 1 5 2.2A3.5 3.5 0 0 1 20 13a3 3 0 0 1-2.5 5.4A3 3 0 0 1 13 20V8.5a4 4 0 0 1 .5-4Z" />
        </svg>
      );
    case 'tool':
      return (
        <svg {...sharedProps}>
          <path d="m14.5 6.5 3 3" />
          <path d="m7 17 8.5-8.5a2.1 2.1 0 1 0-3-3L4 14v3h3Z" />
          <path d="M14 4 20 10" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg {...sharedProps}>
          <rect x="3" y="7" width="18" height="12" rx="2.5" />
          <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
          <path d="M3 12h18" />
        </svg>
      );
    case 'mail':
      return (
        <svg {...sharedProps}>
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case 'phone':
      return (
        <svg {...sharedProps}>
          <path d="M6.6 4h2.2l1.4 4.1-1.6 1.4a16.6 16.6 0 0 0 5.9 5.9l1.4-1.6 4.1 1.4v2.2a1.9 1.9 0 0 1-2.1 1.9A16.9 16.9 0 0 1 4.7 6.1 1.9 1.9 0 0 1 6.6 4Z" />
        </svg>
      );
    case 'mapPin':
      return (
        <svg {...sharedProps}>
          <path d="M12 21s-6-5.2-6-11a6 6 0 0 1 12 0c0 5.8-6 11-6 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case 'github':
      return (
        <svg {...sharedProps}>
          <path d="M12 3a9 9 0 0 0-2.8 17.6c.4.1.6-.2.6-.5v-1.8c-2.6.6-3.2-1.1-3.2-1.1-.4-1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.1-.2-4.4-1.1-4.4-4.8 0-1.1.4-2 1-2.8-.1-.3-.4-1.2.1-2.5 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.3.2 2.2.1 2.5.7.8 1 1.7 1 2.8 0 3.7-2.3 4.5-4.4 4.8.4.3.7.9.7 1.8v2.6c0 .3.2.6.6.5A9 9 0 0 0 12 3Z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...sharedProps}>
          <path d="M7 9v8" />
          <path d="M7 6.5h.01" />
          <path d="M11 17V9" />
          <path d="M11 12.5c0-2 1.2-3.5 3-3.5s3 1.5 3 3.5V17" />
          <rect x="3" y="3" width="18" height="18" rx="3" />
        </svg>
      );
    case 'arrowUpRight':
      return (
        <svg {...sharedProps}>
          <path d="M7 17 17 7" />
          <path d="M9 7h8v8" />
        </svg>
      );
    case 'chevronDown':
      return (
        <svg {...sharedProps}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      );
    case 'chevronUp':
      return (
        <svg {...sharedProps}>
          <path d="m18 15-6-6-6 6" />
        </svg>
      );
    case 'menu':
      return (
        <svg {...sharedProps}>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </svg>
      );
    case 'close':
      return (
        <svg {...sharedProps}>
          <path d="m6 6 12 12" />
          <path d="M18 6 6 18" />
        </svg>
      );
    case 'star':
      return (
        <svg {...sharedProps}>
          <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
        </svg>
      );
    default:
      return (
        <svg {...sharedProps}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}

export default Icon;
