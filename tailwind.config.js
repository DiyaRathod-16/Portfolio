/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#f7f1ee',
        surface: '#fbf7f5',
        ink: '#17131f',
        night: '#17131f',
        accent: '#c084fc',
        pink: '#fb7da5',
        green: '#9ef18c',
        muted: '#4f465d',
        line: '#ddd2cf',
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 26px 70px -38px rgba(25, 21, 32, 0.18)',
        panel: '0 22px 48px -28px rgba(25, 21, 32, 0.16)',
        lift: '0 32px 64px -30px rgba(25, 21, 32, 0.22)',
      },
      backgroundImage: {
        dots:
          'radial-gradient(circle, rgba(25, 21, 32, 0.18) 1.1px, transparent 1.1px)',
        'dots-dark':
          'radial-gradient(circle, rgba(255,255,255,0.22) 1.05px, transparent 1.05px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 7.5s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};
