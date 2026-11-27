import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";

// Barra de 5 segmentos: los llenos son el nivel (como una barra de vida en un videojuego)
function LevelBar({ level }: { level: number }) {
  return (
    <div
      className="flex gap-1"
      role="img"
      aria-label={`Nivel ${level} de 5`}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`h-3 w-6 rounded-sm border-2 border-ink ${
            n <= level ? "bg-accent" : "bg-surface2"
          }`}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <AnimatedSection id="habilidades">
      <SectionHeading
        number="04"
        title="Habilidades"
        subtitle="Solo lo que realmente conozco. Mientras más segmentos, más dominio."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((cat) => (
          <article key={cat.title} className="card-pop p-6">
            <h3 className="font-display text-2xl text-accent">{cat.title}</h3>
            <ul className="mt-4 space-y-3">
              {cat.skills.map((s) => (
                <li key={s.name} className="flex items-center justify-between gap-4">
                  <span className="font-bold">{s.name}</span>
                  <LevelBar level={s.level} />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
