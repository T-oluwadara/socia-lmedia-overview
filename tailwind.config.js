/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        limeGreen: "hsl(163, 72%, 41%)",
        brightRed: "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        youtube: "hsl(348, 97%, 39%)",
        veryDarkBlue1: "hsl(230, 17%, 14%)",
        veryDarkBlue2: "hsl(232, 19%, 15%)",
        darkDesaturatedBlue: "hsl(228, 28%, 20%)",
        desaturatedBlue: "hsl(228, 34%, 66%)",
        darkBlue: "#26304e",
        whiteText: "hsl(0, 0%, 100%)",
        whiteBG: "hsl(0, 0%, 100%)",
        veryPaleBlueTop: "hsl(225, 100%, 98%)",
        lightGrayishBlueCard: "hsl(227, 47%, 96%)",
        lightGrayishBlue2: "#f2f1f5",
        darkGrayishBlueText: "hsl(228, 12%, 44%)",
        veryDarkBlueText: "hsl(230, 17%, 14%)",
        toggle1: "hsl(230, 22%, 74%)",
      },
    },
  },
  plugins: [],
};
