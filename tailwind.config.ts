/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        h2: ["Orbitron", "sans-serif"],
        h1: ["Tiny5", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwindcss-text-stroke"),
    require("@tailwindcss/forms"),
    require("tailwindcss-textshadow"),
  ],
};
