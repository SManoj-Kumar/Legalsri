import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Custom screens — covers all common device widths
    screens: {
      xs:  "400px",   // small phones
      sm:  "640px",   // large phones / small tablets
      md:  "768px",   // tablets
      lg:  "1024px",  // small laptops
      xl:  "1280px",  // laptops / desktops
      "2xl": "1536px", // large desktops
    },
    extend: {
      colors: {
        navy:  { DEFAULT: "#0f1a35", light: "#1a2a4a", dark: "#0a1020" },
        gold:  { DEFAULT: "#c9a84c", dark: "#a8893e",  light: "#d4b96a" },
        cream: "#f8f7f4",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body:    ["DM Sans", "sans-serif"],
      },
      // Custom max widths for very large screens
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
    },
  },
  plugins: [],
};

export default config;
