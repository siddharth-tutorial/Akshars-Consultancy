<<<<<<< HEAD
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // React components ni files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
=======
/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"], // headings mate
        secondary: ["Roboto", "sans-serif"], // body mate
      },
      keyframes: {
        progress91: {
          "0%": { width: "0%" },
          "100%": { width: "91%" },
        },
        progress89: {
          "0%": { width: "0%" },
          "100%": { width: "89%" },
        },
        text91: {
          "0%": { left: "0%" },
          "100%": { left: "91%" },
        },
        text89: {
          "0%": { left: "0%" },
          "100%": { left: "89%" },
        },
      },
      animation: {
        "progress-91": "progress91 1.5s ease-out forwards",
        "progress-89": "progress89 1.5s ease-out forwards",
        "text-91": "text91 1.5s ease-out forwards",
        "text-89": "text89 1.5s ease-out forwards",
      },
      colors: {
        primaryDark: "#0B2A4A",
        primaryLight: "#0A1F3A",
        gold: "#F5B800",
        white: "#FFFFFF",
        silver: "#D1D3D4",
      },
    },
  },
  plugins: [],
};

export default config;
>>>>>>> master
