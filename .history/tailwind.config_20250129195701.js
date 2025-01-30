/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        athletics: "athletics-regular",
        "athletics-bold": "athletics-bold",
        "athletics-black": "athletics-black",
        "athletics-light": "athletics-light",
        "athletics-medium": "athletics-medium",
        "athletics-extrabold": "athletics-extrabold",
      },
    },
  },
  plugins: [],
};
