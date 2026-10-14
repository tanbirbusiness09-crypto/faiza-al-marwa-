import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#0E1F1B",
        teal: {
          deep: "#123A33",
          mid: "#1C4F45",
          line: "#2A6357",
          soft: "#34786B",
        },
        gold: {
          DEFAULT: "#B8862F",
          light: "#E7C77A",
          dark: "#8C631F",
        },
        navy: {
          DEFAULT: "#003078",
          light: "#1E4FA3",
          dark: "#001F52",
        },
        paper: {
          DEFAULT: "#F5F1E6",
          2: "#EFE9D8",
          line: "#DCD3B9",
          white: "#FFFDF8",
        },
        softText: "#4B5750",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        arabic: ["Noto Kufi Arabic", "Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 0 rgba(14,31,27,.06)",
        cardHover: "0 12px 32px rgba(14,31,27,.10)",
        pass: "0 18px 40px rgba(14,31,27,.16)",
      },
      borderRadius: {
        s: "4px",
        m: "8px",
        l: "12px",
        xl: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
