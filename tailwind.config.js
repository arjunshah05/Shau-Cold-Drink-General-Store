/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: { 950: "#09231e", 900: "#123b32", 800: "#194b40", 700: "#286253" },
        cream: "#f7f5ee",
        gold: "#d7ad61"
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Playfair Display", "serif"]
      },
      boxShadow: {
        soft: "0 18px 55px rgba(15, 45, 37, .10)"
      }
    }
  },
  plugins: []
};
