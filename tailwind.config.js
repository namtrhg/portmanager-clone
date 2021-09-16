const plugin = require('tailwindcss/plugin')
const theme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ...theme.fontFamily,
        sans: ['KoHo', ...theme.fontFamily.sans],
      },
      fontSize: {
        base: '1.2rem',
        xl: '1.3rem',
        '5xl': '3rem',
      },
      colors: {
        primary: '#414D4D',
        secondary: '#BDD8D8',
        blue: {
          200: '#EEF9F9',
        },
      },
      textColor: {
        primary: '#414D4D',
        secondary: '#BDD8D8',
        gray: {
          350: '#C0C0C0',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUltilities = {
        '.container': {
          maxWidth: 1064,
        },
        '.gradient': {
          backgroundImage:
            'linear-gradient(0deg,rgba(255, 255, 255, 1) 0%,rgba(238, 249, 249, 1) 20%)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center right',
          width: 'auto',
          overflow: 'hidden',
        },
      }

      addUtilities(newUltilities)
    }),
  ],
}
