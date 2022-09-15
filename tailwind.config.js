/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "rinn-primary": "#000",
        "rinn-shadow-dark": "#0d0d0e",
        "rinn-text-primary": "#F6F5F7",
        "rinn-border": "#f6f5f726",
      },
      boxShadow: {
        rounded: "5px 5px 10px #001, -5px -5px 10px #0d0d0e",
        "rounded-click":
          "inset 14px 14px 28px #001, inset -14px -14px 28px #0d0d0e",
      },
      fontFamily: {
        main: ["Satoshi-Variable", "sans-serif"],
      },
      animation: {
        slideIn: "slideIn 0.7s ease-in-out",
        slideOut: "slideOut 0.7s ease-in-out",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
