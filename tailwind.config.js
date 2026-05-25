/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        primary: "#ef4444",
        "primary-foreground": "#ffffff",
        muted: {
          DEFAULT: "#1f1f1f",
          foreground: "#a3a3a3",
        },
        border: "#262626",
        card: "#111111",
      },
      fontFamily: {
        display: ["Montserrat", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}