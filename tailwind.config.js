/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: 'var(--brand-black, #050505)',
          dark: 'var(--brand-dark, #0a0a0a)',
          charcoal: 'var(--brand-charcoal, #121212)',
          card: 'var(--brand-card, #161616)',
          cardLight: 'var(--brand-card-light, #1f1f1f)',
          border: 'var(--brand-border, #242424)',
          borderLight: 'var(--brand-border-light, #383838)',
          grey: 'var(--brand-grey, #737373)',
          silver: 'var(--brand-silver, #a3a3a3)',
          light: 'var(--brand-light, #e5e5e5)',
          offWhite: 'var(--brand-off-white, #f5f5f5)',
          white: '#ffffff',
          // Controlled Electric-Lime Accent (used strictly for hovers, dots, small highlights)
          lime: '#ccff00',
          limeMuted: '#a3e635',
          limeDim: '#65a30d',
          limeText: 'var(--brand-lime-text, #ccff00)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace']
      },
      boxShadow: {
        'lime-glow': '0 0 25px -4px rgba(204, 255, 0, 0.35)',
        'lime-glow-sm': '0 0 14px -2px rgba(204, 255, 0, 0.4)',
        'white-subtle': '0 0 30px -8px rgba(255, 255, 255, 0.08)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }
    },
  },
  plugins: [],
}
