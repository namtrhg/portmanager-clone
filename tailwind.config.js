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
        sans: ['-apple-system, BlinkMacSystemFont', ...theme.fontFamily.sans],
        mono: ['Consolas', ...theme.fontFamily.mono],
      },
      fontSize: {
        0.8: '0.8rem',
        '1.1em': '1.1em',
        1.2: '1.2rem',
        1.3: '1.3rem',
        2.4: '2.4rem',
        18: '18px',
      },
      lineHeight: {
        1.2: '1.2',
        1.4: '1.4',
        1.6: '1.6',
      },
      height: {
        'time-line': 'cal(100% - 3rem)',
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
      boxShadow: {
        b: '0 4px 4px -2px #ddd',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUltilities = {
        '.gradient': {
          backgroundImage:
            'linear-gradient(0deg,rgba(255, 255, 255, 1) 0%,rgba(238, 249, 249, 1) 20%)',
          backgroundPosition: 'center right',
        },
        '.section': {
          maxWidth: 1000,
          margin: 'auto',
          position: 'relative',
        },
        '.timeline_line': {
          width: '1px',
          height: 'calc(100% - 3rem)',
          background: '#A4C1C0',
          position: 'absolute',
          top: '1rem',
          zIndex: -1,
        },
        '.illustration': {
          position: 'absolute',
          left: '54%',
          zIndex: 0,
          top: '25%',
          margin: 0,
        },
      }

      addUtilities(newUltilities)
    }),
  ],
}
