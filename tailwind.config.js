/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#D7E0EE'
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif']
      },
      fontSize:{
        base: '0.9375'
      }
    },
  },
  plugins: [],
}