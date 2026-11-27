import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

// ✏️ Escribe tus respuestas con tus propias palabras. Los textos de abajo son ejemplos.
const ABOUT = [
  {
    q: "¿Quién soy?",
    a: "Soy Joel, un futuro estudiante de Ingenieria Informatica que le encantan los videojuegos y cosas relacionada a ellos.",
  },
  {
    q: "¿Qué estudio?",
    a: "Voy a estudiar en 2027 Ingenieria Informatica en la UCA.",
  },
  {
    q: "Mis intereses",
    a: "La Tecnologia, los videojuegos, la programacion y desarrollo de videojuegos.",
  },
  {
    q: "Mis objetivos",
    a: "Aprender a programar y desarrollar videojuegos.",
  },
];

const STRENGTHS = ["Aprendo rápido", "Trabajo en equipo", "Constancia", "Creatividad"]; // ✏️ cámbialas

export default function About() {
  return (
    <AnimatedSection id="sobre-mi">
      <SectionHeading
        number="01"
        title="Sobre mí"
        subtitle="Un poco de quién soy y hacia dónde voy."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {ABOUT.map((item) => (
          <article key={item.q} className="card-pop p-6">
            <h3 className="font-display text-2xl text-accent">{item.q}</h3>
            <p className="mt-2 leading-relaxed">{item.a}</p>
          </article>
        ))}
      </div>

      <div className="card-pop mt-6 p-6">
        <h3 className="font-display text-2xl text-accent">Mis fortalezas</h3>
        <ul className="mt-3 flex flex-wrap gap-3">
          {STRENGTHS.map((s) => (
            <li key={s} className="card-pop-sm !bg-surface2 px-4 py-1.5 font-extrabold">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}
