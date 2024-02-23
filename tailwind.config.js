/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        workSans: ['Work Sans', 'sans-serif']
      },
      colors: {
        'hsl-100': 'hsl(0, 0%, 100%)',
        'hsl-light-pink': 'hsl(275, 100%, 97%)',
        'hsl-grayish-purple': 'hsl(292, 16%, 49%)',
        'hsl-dark-purple': 'hsl(292, 42%, 14%)',
        }
    },
  },
  plugins: [],
}