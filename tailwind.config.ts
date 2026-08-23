import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f5f0e0",
        charcoal: {
          DEFAULT: "#1c1c1c",
          700: "#2d2d2d",
          500: "#555555",
        },
        navy: {
          DEFAULT: "#1a2340",
          600: "#1e2a4a",
        },
        graphite: {
          DEFAULT: "#4a4a4a",
          400: "#6b6b6b",
          300: "#888888",
        },
        brass: "#9c8550",
        stone: "#8c8070",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
