/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        athelas: ['"Athelas"', 'serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(33, 44, 46, 0) 0%, #212C2E 100%)',
      },
    },
  },
  plugins: [],
}

