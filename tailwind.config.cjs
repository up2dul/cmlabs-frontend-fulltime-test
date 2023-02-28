/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '475px',
      },
    },
    colors: {
      transparent: 'transparent',
      mine: {
        50: '#f7f7f7',
        100: '#e3e3e3',
        200: '#c8c8c8',
        300: '#a4a4a4',
        400: '#818181',
        500: '#666666',
        600: '#515151',
        700: '#434343',
        800: '#383838',
        900: '#212121',
      },
      cream: {
        50: '#fffaeb',
        100: '#fff1c6',
        200: '#ffe598',
        300: '#ffcc4a',
        400: '#ffb520',
        500: '#f99207',
        600: '#dd6c02',
        700: '#b74a06',
        800: '#94380c',
        900: '#7a2e0d',
      },
    },
  },
  plugins: [],
};
