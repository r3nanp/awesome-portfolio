const production = !process.env.ROLLUP_WATCH

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: ['./src/**/*.svelte', './public/**/*.html'],
    enabled: production,
  },
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Nunito', 'ui-sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
