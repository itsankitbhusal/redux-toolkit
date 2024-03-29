/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'flow-minmax': "repeat(auto-fit, minmax(240px, 1fr))"
      }
    },
  },
  plugins: [],
}