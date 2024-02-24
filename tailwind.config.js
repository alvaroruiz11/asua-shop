/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tussock: {
          50: '#f9f6ed',
          100: '#f2eacf',
          200: '#e6d5a2',
          300: '#d7b86d',
          400: '#cb9e44',
          500: '#c38f39',
          600: '#a16d2d',
          700: '#815027',
          800: '#6c4327',
          900: '#5d3926',
          950: '#361d12'
        }
      }
    }
  },
  plugins: []
};
