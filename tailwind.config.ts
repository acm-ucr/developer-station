/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        description: ['25.26px','35.98px']
      },
      lineHeight: {
        185: "185px",
        87: "87px",
      },
      fontFamily: { 
        Malayalam: ["Malayalam MN", "sans-serif"],
      },
    },
  },
  plugins: [],
};
