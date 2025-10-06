/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'julius': ['Julius Sans One', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'], // Override default sans-serif
      },
      colors: {
        orange: {
          50: '#fef7ec',
          100: '#fdecd3',
          200: '#fbd5a5',
          300: '#f9b76d',
          400: '#f68b1e', // Your custom orange
          500: '#f68b1e', // Replace default orange-500 with your color
          600: '#dd7914',
          700: '#b75f13',
          800: '#944a17',
          900: '#7a3e16',
        },
      },
    },
  },
  plugins: [],
}