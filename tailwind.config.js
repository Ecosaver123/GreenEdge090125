/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d0c7',
          300: '#a5b3a5',
          400: '#839683',
          500: '#687968',
          600: '#526152',
          700: '#424f42',
          800: '#363f36',
          900: '#2d342d',
        },
      },
    },
  },
  plugins: [],
};