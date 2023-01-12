/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FFF7F5",
        secondary: "#EB996E",
        third: "#FF725E",
        black: "#292930",
        tema: "rbga(var(--warna-tema) / <alpha-value>)",
        abu: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" },
      },
      container: {
        center: true,
        margin: {
          default: "0",
        },
      },
      padding: {
        standart: "1rem 1.5rem",
      },
      fontFamily: {
        Jost: ["Jost", "sans-serif"],
        Monallesia: ["Monallesia", "sans-serif"],
      },
    },
  },
  plugins: [],
};
