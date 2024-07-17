/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DBEEE8",
        secondary: {
          DEFAULT:'#b3dcd8',
          100:'#77a19f',
          200:'#4e676b',
        },
        clay: {
          DEFAULT:'#f0d4bf',
          100:'#c06574'
        },
      }
    },
  },
  plugins: [],
}


