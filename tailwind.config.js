/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#A1A1A1",
        black: "#000000",
        white: "#FFFFFF",
        veryDarkGray: "#454545",
      },
      fontFamily: {
        sans: ["League Spartan", "sans-serif"],
      },
      letterSpacing: {
        widest: ".5em",
      },
    },
  },
  plugins: [],
};
