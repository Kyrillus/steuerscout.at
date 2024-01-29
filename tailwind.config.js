/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#443FDE",
        offWhite: "#faf6f4",
        offBlack: "#1D1F27",
        darkGray: "#3b3b3b"
      },
    },
  },
  plugins: [],
}

