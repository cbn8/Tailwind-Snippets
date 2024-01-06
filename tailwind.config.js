/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
    },
  },
  plugins: [require("@martijn.cuppens/tailwindcss-fluid")],
};
