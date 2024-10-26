/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js'],
  darkMode: "selector",

  theme: {
    extend: {
      height: {
        screen: "100dvh",
      },
      boxShadow: {
        customShadow: "#1b1c1d 0 0 5px",
      },
    },
  },
  plugins: [],
};
