/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        malayalam: ["Malayalam MN", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",

        dropShadow: {
          glow: "0 0 15px rgba(250, 204, 21, 0.8)",
        },
      },
    },
    plugins: [],
  },
};
