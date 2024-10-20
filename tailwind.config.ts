/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        devstation: {
          "green-100": "#114C03",
          "green-200": "#082A00",
          "green-300": "#498A39",
          "yellow-100": "#ece8bc",
        },
      },
    },
  },
  plugins: [],
};
