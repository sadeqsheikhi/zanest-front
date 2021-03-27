// tailwind.config.js
const colors = require("tailwindcss/colors")
module.exports = {
  purge: {
    enabled: false,
    content: ['./src/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['iransans','tahoma', 'sans-serif'],
      serif: ['times new roman', 'serif'],
  },
    colors: {
      black: '#242424',
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      gray: colors.blueGray,
      green: colors.green,
      red: colors.red,
      blue: colors.blue,
      cyan: colors.cyan,
      yellow: colors.yellow,
      lime: colors.lime,
      orange: colors.orange,
      rose: colors.rose,
      teal: colors.teal,
      white: '#fff'
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}