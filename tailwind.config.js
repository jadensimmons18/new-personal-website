/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          800: '#0c2247',
          900: '#06142e',
          950: '#02060f',
        },
        mist: {
          50: '#f4f8ff',
          200: '#d2e1fa',
        },
        brand: {
          600: '#2b5fd0',
        },
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        label: '0.16em',
        labelWide: '0.42em',
        nav: '0.22em',
      },
      fontSize: {
        'hero-title': [
          'clamp(38px,6.4vw,104px)',
          { lineHeight: '0.98', letterSpacing: '-0.015em' },
        ],
        'projects-title': [
          'clamp(44px,6.6vw,96px)',
          { lineHeight: '0.98', letterSpacing: '-0.02em' },
        ],
        'project-heading': [
          'clamp(30px,3.4vw,48px)',
          { lineHeight: '1.02', letterSpacing: '-0.015em' },
        ],
      },
      maxWidth: {
        nav: '1180px',
        projects: '1200px',
      },
      animation: {
        'float-arrow': 'float-arrow 1.8s ease-in-out infinite',
        'reveal-up': 'reveal-up 1.2s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        'reveal-up-delay-1': 'reveal-up 1.3s 0.12s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        'reveal-up-delay-2': 'reveal-up 1.4s 0.28s cubic-bezier(0.2, 0.7, 0.2, 1) both',
      },
      keyframes: {
        'float-arrow': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.85' },
          '50%': { transform: 'translateY(7px)', opacity: '0.35' },
        },
        'reveal-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
