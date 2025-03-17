
import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"
import tailwindcssForms from "@tailwindcss/forms";
import tailwindcssTypography from "@tailwindcss/typography";
import tailwindcssAnimated from "tailwindcss-animated";

export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
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
        // Original Maximally colors
        maximally: {
          green: "#00FFAA",
          blue: "#33BBFF",
          purple: "#BB44FF",
          pink: "#FF44BB",
          orange: "#FF8844",
        },
        // New neon colors for Gen Z aesthetic
        maximally: {
          "neon-green": "#00FF88",
          "neon-blue": "#1E96FF",
          "neon-purple": "#C800FF",
          "neon-pink": "#FF32C8",
          "neon-orange": "#FF6A00",
          "neon-yellow": "#FFFF00", 
          green: "#00FFAA",
          blue: "#33BBFF",
          purple: "#BB44FF",
          pink: "#FF44BB",
          orange: "#FF8844",
        },
        'sidebar-primary': {
          DEFAULT: 'hsl(var(--sidebar-primary))',
          foreground: 'hsl(var(--sidebar-primary-foreground))',
        },
        'sidebar-accent': {
          DEFAULT: 'hsl(var(--sidebar-accent))',
          foreground: 'hsl(var(--sidebar-accent-foreground))',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
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
        "ping-slow": {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "50%": {
            transform: "scale(1.1)",
            opacity: "0.8",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 20px 2px var(--pulse-color, rgba(0, 255, 170, 0.7))",
          },
          "50%": {
            opacity: "0.6",
            boxShadow: "0 0 10px 1px var(--pulse-color, rgba(0, 255, 170, 0.3))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "ping-slow": "ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [
    tailwindcssAnimated,
    tailwindcssForms,
    tailwindcssTypography,
    require("tailwindcss-animate")
  ],
} satisfies Config;
