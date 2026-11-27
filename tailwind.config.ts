import type { Config } from "tailwindcss";

// Los colores NO están escritos aquí: apuntan a variables CSS (globals.css).
// Así, al cambiar de tema (Spider / Poké) cambian todos los colores sin tocar los componentes.
const color = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: color("bg"),
        surface: color("surface"),
        surface2: color("surface2"),
        ink: color("ink"),
        muted: color("muted"),
        accent: color("accent"),
        accent2: color("accent2"),
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
