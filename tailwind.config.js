/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  important:'#padua',
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    colors:{
      gray: colors.gray,
      white: colors.white
    },
    extend: {},
  },
  plugins: [],
}
