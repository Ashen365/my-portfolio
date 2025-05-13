/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',//background
        neonGreen: '#6A0DAD',//
        neonPink: '#ff007f',//
        neonBlue: '##00FFFF',//
      },
      boxShadow: {
        neon: '0 0 10px #6A0DAD, 0 0 20px #6A0DAD',
        neonPink: '0 0 10px #FF007F, 0 0 20px #FF007F',
        neonBlue: '0 0 10px #00FFFF, 0 0 20px #00FFFF',
      },
    },
  },
  plugins: [],
};