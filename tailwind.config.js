const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BebasNeue: ["BebasNeue", "sans-serif"], // after you font, add some fonts separated by commas to handle fallback.
        TuskerGrotesk: ["TuskerGrotesk", "sans-serif"], // after you font, add some fonts separated by commas to handle fallback.
      },
      colors: {
        primary: "#4a3aff",
        danger: "#dc4c64",
        bgBackground: "#F9F9F9",
      },
      backgroundImage: {
        "hero-pattern": "url('/america-flag.png')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
