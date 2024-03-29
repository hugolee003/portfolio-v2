/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        github: "#EA4C89",
        instagram: "#d62976 ",
        twitter: "#1DA1F2",
        linkedin: "#0A66C2",
      },
      fontFamily: {
        'open-sauce': ['Open Sauce One', 'sans-serif'],
      }, 
    },
  },
  plugins: [],
  darkMode: "class",
};
