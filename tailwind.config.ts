/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        devstation: {
          "green-100": "#114C03",
          "green-200": "#498A39",
          "project-card-bg-green": "#3B7227B2",
          "project-card-border-green": "#529546",
        },
      },
      fontFamily: {
        malayalam: ["Malayalam MN", "sans-serif"],
      },
    },
  },
  plugins: [],
};
