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
      purple: colors.purple,
      pink: colors.pink,
      gray: colors.blueGray,
      green: colors.green,
      red: colors.red,
      blue: colors.blue,
      white: '#fff'
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}