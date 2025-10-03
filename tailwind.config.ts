import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        md: "2.5rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem"
      },
      screens: {
        "2xl": "1200px"
      }
    },
    extend: {
      colors: {
        brand: {
          deep: "#08473e",
          natural: "#3d8c45",
          turquoise: "#3ea3a4",
          aqua: "#7ac1bb",
          accent: "#edaf00",
          light: "#f5f5f5",
          gray: "#b0b0b0",
          black: "#1b1b1b",
          charcoal: "#2c2c2c"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
        body: ["var(--font-body)", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};

export default config;
