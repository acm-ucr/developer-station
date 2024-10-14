/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        devstation: {
          "green-100": "#114C03",
          "green-200": "#498A39",
        },
      },
      fontFamily: {
        Malayalam: ["Malayalam MN", "sans-serif"],
      },
    },
  },
  plugins: [],
};
