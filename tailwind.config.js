/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#C5B8AA",
      },
      fontFamily: {
        // 'press-start': ['"Press Start 2P"', 'cursive'],
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
