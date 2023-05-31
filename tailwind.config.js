/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        md: '768px',
        xl: '1280px',
      },
      colors: {
        lightWite: '#FCF8FF',
        lightBrown: {
          30: '#CBB389',
        },
        purple: {
          30: '#9C89B3',
          80: '#5C4083'
        },
        red: {
          80: '#EF4444'
        }
      },
      fontFamily: {
        'display': ['Fixel Display'],
        'cormorant': ['Cormorant Infant'],
        'tanPearl': ['TAN-PEARL'],
      },
      container: {
        padding: {
          DEFAULT: '32px',
          xs: '20px',
          md: '32px',
          xl: '32px',
        },

      },
    },
  },
  plugins: [],
}
