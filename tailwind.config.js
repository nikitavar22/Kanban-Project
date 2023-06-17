/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        'Roboto',
        'sans-serif',
      ],
    },
    extend: {
      spacing: {
        '55': '55px',
        '197': '197px',
      },
    },
  },
  plugins: [],
}