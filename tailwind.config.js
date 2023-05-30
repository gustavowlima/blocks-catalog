/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },

      colors: {
        black: {
          100: "#202020",
        },
        white: {
          50: "#FBFBFB",
          100: "#FFFFFF",
        },
        gray: {
          50: "#E9E9E9",
          100: "#CCCCCC",
        },
        purple: {
          50: "#A11CF3",
          100: "#D835C5",
        }
      },

      fontSize: {
        title : "1.9rem",
        productTitle: '0.625rem'
      },

      backgroundImage: {
        purpleGradient: "linear-gradient(90deg, #A11CF3 0%, #D835C5 100%)",
        blackImage: "linear-gradient(90deg, #202020 0%, #202020 100%)"

      },
    },
  },
  plugins: [],
};
