/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#0f172a', // This is slate-950, matching your About component
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 10px #6A0DAD, 0 0 20px #6A0DAD',
        neonPink: '0 0 10px #FF007F, 0 0 20px #FF007F',
        neonBlue: '0 0 10px #00FFFF, 0 0 20px #00FFFF',
      },
      animation: {
        blob: "blob 7s infinite",
        blink: "blink 1s step-end infinite", 
        bounce: "bounce 2s infinite",
        shimmer: "shimmer 2s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};