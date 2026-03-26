/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'app-bg': "rgb(var(--bg-color) / <alpha-value>)",
        background: "rgb(var(--bg-color) / <alpha-value>)",
        surface: "rgb(var(--bg-surface) / <alpha-value>)",
        card: "rgb(var(--bg-card) / <alpha-value>)",
        'card-border': "rgb(var(--border-color) / <alpha-value>)",
        accent: {
          blue: "#4f9cf9",
          purple: "#a78bfa",
          green: "#34d399",
        },
        text: {
          primary: "rgb(var(--text-primary) / <alpha-value>)",
          secondary: "rgb(var(--text-secondary) / <alpha-value>)",
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
