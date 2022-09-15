/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "rinn-primary": "#333333",
        "rinn-shadow-light": "#3b3b3b",
        "rinn-shadow-dark": "#2b2b2b",
        "rinn-text-primary": "#F6F5F7",
      },
      boxShadow: {
        rounded: "7px 7px 14px #2b2b2b, -7px -7px 14px #3b3b3b",
        "rounded-click":
          "inset 14px 14px 28px #2c2c2c, inset -14px -14px 28px #3a3a3a",
      },
      fontFamily: {
        main: ["Satoshi-Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
