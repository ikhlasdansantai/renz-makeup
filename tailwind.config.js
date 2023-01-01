/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#FFF7F5",
        secondary: "#EB996E",
        third: "#FF725E",
        black: "#292930",
        tema: "rbga(var(--warna-tema) / <alpha-value>)",
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
