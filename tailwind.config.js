/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'highlight': '#ab9ff2',
        'background': '#e2dffe',
        'text': '#3c315b',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}