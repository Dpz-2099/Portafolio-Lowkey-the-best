import { ArrowDown } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import ProfileImage from "@/components/ui/ProfileImage";
import { PROFILE } from "@/lib/constants";

const HERO_BUTTONS = [
  { label: "Sobre mí", href: "#sobre-mi", primary: true },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

// Telaraña geométrica genérica (solo se ve en el tema Spider)
function Web({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M0 0 L200 200 M0 70 L130 200 M0 140 L60 200 M70 0 L200 130 M140 0 L200 60" />
      <path d="M0 40 Q40 40 40 0 M0 90 Q90 90 90 0 M0 150 Q150 150 150 0 M20 200 Q200 200 200 20" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28"
    >
      {/* Decoración por tema */}
      <Web className="only-spider pointer-events-none absolute -left-6 -top-6 h-56 w-56 text-accent/40" />
      <Web className="only-spider pointer-events-none absolute -bottom-6 -right-6 h-64 w-64 rotate-180 text-accent2/40" />
      <div className="only-poke pointer-events-none absolute right-10 top-28 h-24 w-24 rounded-full border-[6px] border-accent/30" />
      <div className="only-poke pointer-events-none absolute bottom-24 left-8 h-16 w-16 rounded-full bg-accent2/20" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 md:flex-row md:justify-between">
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <p className="card-pop-sm mb-4 inline-block !bg-accent2 px-3 py-1 text-sm font-extrabold uppercase tracking-widest text-white">
            {PROFILE.role}
          </p>

          <h1 className="font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            {PROFILE.name}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg text-muted md:mx-0">
            {PROFILE.tagline}
          </p>

          <nav
            aria-label="Navegación del inicio"
            className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start"
          >
            {HERO_BUTTONS.map((b) => (
              <a
                key={b.href}
                href={b.href}
                className={b.primary ? "btn btn-primary" : "btn btn-ghost"}
              >
                {b.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 flex justify-center gap-3 md:justify-start">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="btn btn-ghost !p-3"
            >
              <Github size={22} />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="btn btn-ghost !p-3"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        {/* Foto */}
        <div className="animate-float">
          <ProfileImage />
        </div>
      </div>

      <a
        href="#sobre-mi"
        aria-label="Bajar a la siguiente sección"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce text-muted hover:text-ink"
      >
        <ArrowDown />
      </a>
    </section>
  );
}
