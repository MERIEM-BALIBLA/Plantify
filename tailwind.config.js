/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      height: {
        '0.5': '0.5px',
      },
      colors: {
        'default-bg': 'red', // Replace with your default background color
      },
    },
  },
  plugins: [],
}

