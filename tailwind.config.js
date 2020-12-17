// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['iransans', 'tahoma', 'sans-serif'],
    },

    colors: {
      black: '#242424',
      purple: '#4E3273',
      pink: '#CC7670',
      green: '#148F10',
      red: '#B61C12',
      blue: '#0B96D4',
      
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}