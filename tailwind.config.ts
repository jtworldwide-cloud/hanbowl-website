import type { Config } from "tailwindcss";

// HAN BOWL — Design tokens อ้างอิงจาก Brand Guidelines
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        terracotta: "#8B3A1F",     // หลัก (primary)
        burnt: "#D87A3B",          // เน้น (accent)
        charcoal: "#1A1A1A",       // ข้อความ + เงา
        cream: "#F5E6D3",          // พื้นหลัง
        kimchi: "#C73E1D",         // เผ็ดมาก
        sesame: "#E8C57D",         // เน้นย่อย
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'IBM Plex Sans Thai'", "system-ui", "sans-serif"],
        korean: ["'Noto Serif KR'", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "steam": "steam 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        steam: {
          "0%, 100%": { opacity: "0.3", transform: "translateY(0) scale(1)" },
          "50%": { opacity: "0.7", transform: "translateY(-10px) scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
