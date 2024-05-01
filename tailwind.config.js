/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      smd: "1025px",
      lg: "1441px",
    },
    extend: {},
  },
  plugins: [],
};
