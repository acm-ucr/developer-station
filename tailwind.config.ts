/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-yellow": "#FCE490",
        "dark-cyan": "#023851",
      },
      fontFamily: {
        Malayalam: ["Malayalam MN", "sans-serif"],
      },
    },
  },
  plugins: [],
};
