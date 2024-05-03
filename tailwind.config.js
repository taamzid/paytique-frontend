/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      smd: "1025px",
      lg: "1441px",
    },
    extend: {
      colors: {
        background: "rgba(25, 107, 254, 0.06)", // Correct syntax for defining RGBA color
      fontFamily: {
        SFRegular: ["SFRegular"],
        SFMedium: ["SFMedium"],
        SFBold: ["SFBold"],
      },
    },
  },
  plugins: [],
};
