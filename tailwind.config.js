module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: {
      'header':'#333029',
      'service':'#333029',
      'recent':'#f6f2eb',
      'footer':'#37342d'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
