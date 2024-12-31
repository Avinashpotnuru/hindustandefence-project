/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ["Rajdhani", "serif"], // Define your custom font family
      },
      colors: {
        gradientOrange1: "#F5961B", // Starting color
        gradientOrange2: "#E76420", // Midpoint color
      },
      backgroundImage: {
        "orange-gradient":
          "linear-gradient(to right, #F5961B 0%, #E76420 51%, #F5961B 100%)",
      },
    },
  },
  plugins: [],
};
