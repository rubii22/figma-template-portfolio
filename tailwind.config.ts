import type { Config } from "tailwindcss";

// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", 
    "./src/app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryYellow: "#FFD700", 
        lightGray: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
