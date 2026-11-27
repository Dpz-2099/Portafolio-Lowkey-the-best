import type { Metadata } from "next";
import { Bangers, Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import Providers from "@/components/layout/Providers";

// next/font descarga las fuentes y las sirve desde tu propio sitio.
// Cada una crea una variable CSS que usa globals.css según el tema.
const bangers = Bangers({ weight: "400", subsets: ["latin"], variable: "--font-bangers" });
const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Josué Alvarado | Portafolio",
  description:
    "Portafolio digital de Josué Joel Alvarado González, estudiante de Ingeniería Informática.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning: next-themes cambia data-theme antes de que React cargue
    <html
      lang="es"
      suppressHydrationWarning
      className={`${bangers.variable} ${fredoka.variable} ${nunito.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
