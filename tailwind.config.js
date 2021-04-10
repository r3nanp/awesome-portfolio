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
  darkMode: 'media', // Get the preference theme from the OS.
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        'accents-0': 'var(--accents-0)',
        'accents-1': 'var(--accents-1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
