/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple:{
          300:"#FFF2D7",
          500:"#FA812F",
          600:"#FA4032"
        },
        lime:{
          100:"#ecfccb",
          200:"#d9f99d",
          400:"#a3e635",
          500:"#84cc16",
        },
        slate:{
          100:"#f1f5f9",
          200:"#e2e8f0",
          400:"#1e293b",
          500:"#0f172a",
        }
      }
    },
  },
  plugins: [],
}

