import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        itg: {
          100: "#FCFCFD",
          200: '#D5D8DD',
          300: '#ABB1BA',
          700: '#2E3238',
        }
      },
      fontFamily: {
        monserat: ["var(--font-monserat)"],
        open_sans: ["var(--font-open-sans)"],
      }
    },
  },
  plugins: [],
} satisfies Config;
