/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        marvelRed: "#ec1d27",
        bgPrimary: "#151515",
        bgSecondary: "#303030",
      },
    },
  },
  plugins: [],
};
