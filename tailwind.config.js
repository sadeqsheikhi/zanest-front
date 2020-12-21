// tailwind.config.js
const colors = require("tailwindcss/colors")
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['iransans','tahoma', 'sans-serif'],
      serif: ['times new roman', 'serif'],
  },
    colors: {
      black: '#242424',
      purple: '#4E3273',
      pink: '#CC7670',
      gray: colors.blueGray,
      green: '#148F10',
      red: '#B61C12',
      blue: '#0B96D4',
      white: '#fff'
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}