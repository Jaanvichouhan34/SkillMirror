/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'app-bg': "#04050a",
        surface: "#0d1220",
        card: "#111827",
        'card-border': "rgba(99,179,237,0.12)",
        accent: {
          blue: "#4f9cf9",
          purple: "#a78bfa",
          green: "#34d399",
        },
        text: {
          primary: "#e8edf5",
          secondary: "#8fa3bf",
        }
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'gradient-main': "linear-gradient(to right, #4f9cf9, #a78bfa)",
      },
      boxShadow: {
        'glow': '0 0 20px rgba(79, 156, 249, 0.15)',
      }
    },
  },
  plugins: [],
}
