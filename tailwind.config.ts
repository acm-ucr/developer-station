/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        devstation: {
          "cyan-100": "#023851",
          "yellow-100": "#FDE491",
        },
      },
      fontFamily: {
        Malayalam: ["Malayalam MN", "sans-serif"],
      },
    },
  },
  plugins: [],
};
