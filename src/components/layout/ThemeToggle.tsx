"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // Hasta que el componente "monta" en el navegador no sabemos el tema guardado;
  // esperar evita errores de hidratación.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isSpider = !mounted || theme !== "poke";

  return (
    <button
      type="button"
      onClick={() => setTheme(isSpider ? "poke" : "spider")}
      aria-label={isSpider ? "Cambiar a tema Poké" : "Cambiar a tema Spider"}
      className="btn btn-ghost !px-3 !py-1.5 text-sm"
    >
      {isSpider ? "🕷️ Spider" : "⚡ Poké"}
      <span className="text-muted">→ cambiar</span>
    </button>
  );
}
