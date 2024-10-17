import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      milky: ["Milky Nice", "sans-serif"],
      RockRollOne: ["RockRollOne", "sans-serif"],
      RetroSigned: ["RetroSigned", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        mobile: "480px",
        sm: "600px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
    },
    extend: {
      colors: {
        "meme-purple": "#2A0244",
        "meme-yellow": "#ffdf00",
        "meme-green": "#4cb050",
        "meme-red": "#ff1841",
        "meme-orange": "#f66b3f",
        "meme-blue": "#2d7ced",
        "meme-light-purple": "#8f46eb",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "gradient-to-t-meme":
          "linear-gradient(360deg, #ffdf00 25%, #4cb050 100%)",
        "gradient-to-b-meme":
          "linear-gradient(180deg, #ffdf00 25%, #4cb050 75%)",
        "spin-background": "linear-gradient(135deg, #9c41f2, #6e13d9)",
      },
      boxShadow: {
        "faq-shadow": "0px 5px rgba(0, 0, 0, 1)",
        "add-chain-shadow": "5px 5px rgba(0, 0, 0, 1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
