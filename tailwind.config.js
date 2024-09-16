/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {},
    // Chỉnh lại margin: auto cho class container
    container: {
      center: true
    },
  },
  plugins: [],
}

