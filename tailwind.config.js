/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-gray': '#293038ff',
        'regal-blue': '#03A9F4',
      },
    },
  },
  plugins: [],
}