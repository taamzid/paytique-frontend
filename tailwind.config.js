/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      smd: "1025px",
      slg: "1441px",
      lg: "1879px",
    },
    extend: {
      fontFamily: {
        sfregular: ["SFRegular"],
        sfmedium: ["SFMedium"],
        sfbold: ["SFBold"],
        sfsemibold: ["SFSemiBold"],
      },
      colors: {
        background: "rgba(25, 107, 254, 0.06)",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
