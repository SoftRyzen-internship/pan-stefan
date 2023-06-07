/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        s: '480px',
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
          80: '#5C4083',
        },
        red: {
          80: '#EF4444',
        },
      },
      fontFamily: {
        display: ['Fixel Display'],
        cormorant: ['Cormorant Infant'],
        tanPearl: ['Dancing Script'],
      },

      backgroundImage: {
        cardGradient:
          'linear-gradient(270deg, rgba(203, 179, 137, 0) 0%, #CBB389 50.52%, rgba(203, 179, 137, 0) 99.9%)',
      },

      container: {
        screens: {
          xs: '320px',
          s: '480px',
          md: '768px',
          xl: '1280px',
        },
        padding: {
          DEFAULT: '32px',
          xs: '20px',
          s: '20px',
          md: '32px',
          xl: '32px',
        },
      },
    },
  },
  plugins: [],
};
