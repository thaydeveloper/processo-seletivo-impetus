/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  plugins: [require("@tailwindcss/forms")],
};
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media",
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      lg: "1024px",
      xl: "1920px",
    },
  },
  plugins: [],
};
