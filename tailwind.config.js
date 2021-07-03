const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          light: "#333",
          DEFAULT: "#222",
          dark: "#111",
          pure: "#000",
        },
        primary: {
          light: colors.red[300],
          DEFAULT: colors.red[400],
          dark: colors.red[500],
        },
      },
    },
    fontFamily: {
      sans: ["Poppins", "ui-sans-serif", "system-ui"],
      display: ["Playfair Display", "Oswald"],
      handwrite: ["Homemade Apple"],
      body: ["Poppins", "Open Sans"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
