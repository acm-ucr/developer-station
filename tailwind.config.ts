/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Malayalam: ["Malayalam MN", "sans-serif"],
      },
    },
  },
  plugins: [],
};
