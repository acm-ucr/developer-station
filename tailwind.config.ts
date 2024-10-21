/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        devstation: {
          "green-100": "#114C03",
          "green-200": "#498A39",
          "yellow-200": "#FDE491",
          "cyan-100": "#023851",
          "green-300": "#082A00",
          "yellow-100": "#ece8bc",
          "yellow-300": "#FFE485",
        },
      },
      fontFamily: {
        malayalam: ["Malayalam MN", "sans-serif"],
      },
    },
  },
  plugins: [],
};
