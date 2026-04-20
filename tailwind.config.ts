import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0b",
        ivory: "#f3ecdf",
        caramel: "#b78b5a",
        mist: "#a7a19a"
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        luxury: "0 24px 60px rgba(0, 0, 0, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
