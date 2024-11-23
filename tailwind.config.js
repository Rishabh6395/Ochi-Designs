/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        foundersgrotesk: ['FoundersGrotesk-Semibold, sens-serif'],
        neueMontrealregular: ['NeueMontreal-Regular, sens-serif'],
      }
    },
  },
  plugins: [],
}