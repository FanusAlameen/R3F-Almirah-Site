/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'pinyon': ["Pinyon Script", 'cursive'],
      'roboto': ["Roboto Condensed", 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}