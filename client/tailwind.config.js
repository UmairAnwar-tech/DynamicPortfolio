/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#090B23",
        secondary: "#F5D555",
        tertiary: "#B9E297",
      },
    },
    screens: {
      lg: { max: "2000px" },
      sm: { max: "1000px" },
    },
  },
  plugins: [],
};
