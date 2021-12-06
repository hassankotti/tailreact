module.exports = {
  purge: ["../src/**/*.{js,jsx,ts,tsx}", "../../public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ebony: {
          50: "#f3f3f4",
          100: "#e7e7e9",
          200: "#c4c4c9",
          300: "#a0a1a8",
          400: "#585a66",
          500: "#111325",
          600: "#0f1121",
          700: "#0d0e1c",
          800: "#0a0b16",
          900: "#080912",
        },
      },
      fontFamily: {
        raleway: ['"raleway"', "cursive"],
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('../images/hero.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-rtl")],
};
