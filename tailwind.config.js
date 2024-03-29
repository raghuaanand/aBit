/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Raleway', 'Inter', 'sans-serif'],
        'handwriting' : ['"Gloria Hallelujah"', 'cursive'],
      }
    },
  },
  plugins: [],
}

