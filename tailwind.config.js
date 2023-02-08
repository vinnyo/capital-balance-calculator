/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  important: '#sayf',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors:{
      gray: colors.gray
    },
    extend: {},
  },
  plugins: [],
}
