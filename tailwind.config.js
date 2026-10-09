/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#050505',
          dark: '#0a0a0a',
          charcoal: '#121212',
          card: '#161616',
          cardLight: '#1f1f1f',
          border: '#242424',
          borderLight: '#383838',
          grey: '#737373',
          silver: '#a3a3a3',
          light: '#e5e5e5',
          offWhite: '#f5f5f5',
          white: '#ffffff',
          // Controlled Electric-Lime Accent (used strictly for hovers, dots, small highlights)
          lime: '#ccff00',
          limeMuted: '#a3e635',
          limeDim: '#65a30d',
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
