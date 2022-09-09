/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#C5B8AA",
        bg1: "linear-gradient(318deg, rgba(71,109,110,1) 0%, rgba(251,246,218,1) 85%)",
      },
      fontFamily: {
        // 'press-start': ['"Press Start 2P"', 'cursive'],
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
