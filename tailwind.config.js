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
  },
  plugins: [],
};
