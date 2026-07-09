import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        accent: "#E8FF47",
        "accent-dim": "#C8DF2A",
        surface: "#111111",
        "surface-2": "#1A1A1A",
        muted: "#6B6B6B",
        "off-white": "#F0EDE8",
      },
    },
  },
  plugins: [],
};

export default config;
