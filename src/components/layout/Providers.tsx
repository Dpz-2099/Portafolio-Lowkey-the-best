"use client";

import { ThemeProvider } from "next-themes";

// Envuelve toda la app para que cualquier componente pueda leer/cambiar el tema.
// attribute="data-theme" -> pone data-theme="spider" o "poke" en <html>, que usa globals.css.
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      themes={["spider", "poke"]}
      defaultTheme="spider"
      enableSystem={false}
    >
      {children}
    </ThemeProvider>
  );
}
