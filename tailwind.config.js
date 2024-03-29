/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}",
  "./*.{html,js}",
  "./node_modules/flowbite/**/*.js",
  "./pages/**/*.html",],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

