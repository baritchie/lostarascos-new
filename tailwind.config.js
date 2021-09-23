module.exports = {
  purge: [ '_site/**/*.html','_site/*.html' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        fontFamily: {
            "martel-sans": "'Martel Sans',sans-serif",
        },
        colors: {
            "site-yellow": "#FEBD2F",
            "site-tan": "#E7DACD",
        }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
