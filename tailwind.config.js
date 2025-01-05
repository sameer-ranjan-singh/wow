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
        }
      }
    },
  },
  plugins: [],
}

