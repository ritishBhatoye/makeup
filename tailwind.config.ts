import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f2ede8",
        text: "#6b5c4c",
        "text-light": "#8a7a6d",
        primary: "#6b5c4c",
        white: "#ffffff",
      },
    },
  },
  plugins: [animate],
  
};

export default config;