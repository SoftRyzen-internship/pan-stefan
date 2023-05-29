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
        xl: '1480px',
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
      },
      fontFamily: {
        // 'display': ['FixelDisplay-Bold'],
        // 'body': ['"Open Sans"'],
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
