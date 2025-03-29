/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          deep: '#0F172A',    // Deep navy blue
          electric: '#2563EB', // Electric blue
          wild: '#00A3FF',    // Cerulean blue
        }
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: '50% 50%, 50% 50%' },
          to: { backgroundPosition: '350% 50%, 350% 50%' },
        },
      },
      animation: {
        aurora: 'aurora 60s linear infinite',
      },
    },
  },
  plugins: [],
};