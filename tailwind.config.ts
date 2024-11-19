/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        devstation: {
          "blue-400": "#001A9F",
          "cyan-100": "#023851",
          "green-20": "#CAFFBD",
          "green-50": "#E4FFDD",
          "green-100": "#114C03",
          "green-200": "#498A39",
          "green-300": "#082A00",
          "green-400": "#3B7227B2",
          "green-500": "#529546",
          "yellow-20": "#E5FFDE",
          "yellow-50": "#FFF4B8",
          "yellow-100": "#ece8bc",
          "yellow-200": "#FDE491",
          "yellow-300": "#FFE485",
          "yellow-400": "#FFE248",
          "blue-50": "#EBFBFF",
          "blue-500": "#110F51",
        },
      },
      fontFamily: {
        malayalam: ["Malayalam MN", "sans-serif"],
      },
      dropShadow: {
        glow: "0 0 15px rgba(250, 204, 21, 0.8)",
      },
    },
  },
  plugins: [],
};
