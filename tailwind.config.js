/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sectionColor: "#4070f4",
        textColor: "#a9d6f0",
        titleColor: "#fffa65",
      },
      backgroundImage: {
        slider: "url('./background2.jpg')",
      },
    },
  },
  plugins: [],
};
