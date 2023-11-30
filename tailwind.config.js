/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
    },
    colors: {
      lime: "#A5D837",
      green: "#0C6327",
      orange: "#FFA900",
      // gray: "#F5F5F5",
      gray: "#DEDEDE",
      black: "#000000",
      white: "#FFFFFF",
      dark: "#36454F",
    },
    screens: {
      xsm: "400px",
      ssm: "427px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      mmd: "953px",
      xmmd: "977px",
      xmd: "991px",

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      minixl: "1258px",
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
