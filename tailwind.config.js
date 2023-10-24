/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-one": "#3E92CC",
        "blue-two": "#2A628F",
        "blue-three": "#18435A",
        "blue-four": "#16324F",
        "blue-five": "#13293D"
      }
    },
  },
  plugins: [],
}

