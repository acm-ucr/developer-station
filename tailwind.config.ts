/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        devstation: {
          "cyan-100": "#023851",
          "green-100": "#114C03",
          "green-200": "#498A39",
          "green-300": "#082A00",
          "green-400": "#3B7227B2",
          "green-500": "#529546",
          "yellow-100": "#ece8bc",
          "yellow-200": "#FDE491",
        },
      },
      fontFamily: {
        malayalam: ["Malayalam MN", "sans-serif"],
      },
    },
  },
  plugins: [],
};
