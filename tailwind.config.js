/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': {
          50: '#90BD95',
          100: '#C1F1C6',
          200: '#5FE26C',
          300: '#39DB4A'
        },
        'red': '#FF6868',
        'yellow': '#FFE605',
        'black': '#000000',
        'grey': {
          100: '#EFEFEF',
          200: '#555555'
        },
        'white': '#FFFFFF'
      },
      boxShadow: {
        'btn': '6px 27px 34px 0px #0000001A',
        'hero-card': '7px 35px 51px 0px #00000024',
        'catalog-card': '2px 10px 30px 0px #0000001A',
        'menu-card': '2px 9px 42px 0px #00000014',
        'servise-card': '7px 12px 43px 0px #00000024',
        'green-btn': '-2px 22px 38px 0px #8EFF9A80'
      },
      maxWidth: {
        '1400': '1400px',
      },
      container: {
        center: true,
        padding: '0 20px'
      },
    },
  },
  plugins: [],
}