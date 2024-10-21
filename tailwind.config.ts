/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        devstation: {
          "green-100": "#114C03",
          "yellow-100": "#FDE491",
          "cyan-100": "#023851",
        },
      },
      fontFamily: {
        Malayalam: ["Malayalam MN", "sans-serif"],
      },
    },
  },
  plugins: [],
};
