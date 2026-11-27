import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/data/education";
import type { EducationItem } from "@/types";

function Group({ title, items }: { title: string; items: EducationItem[] }) {
  if (items.length === 0) return null; // si una lista está vacía, no se muestra
  return (
    <article className="card-pop p-6">
      <h3 className="font-display text-2xl text-accent">{title}</h3>
      <ul className="mt-4 space-y-4">
        {items.map((it) => (
          <li key={it.title} className="border-l-4 border-accent2 pl-3">
            <p className="font-extrabold">{it.title}</p>
            <p className="text-sm text-muted">
              {it.place} · {it.period}
            </p>
            {it.detail && <p className="mt-1 text-sm">{it.detail}</p>}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Education() {
  return (
    <AnimatedSection id="formacion">
      <SectionHeading
        number="05"
        title="Formación académica"
        subtitle="Dónde estudio y todo lo que he sumado en el camino."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <Group title="Estudios" items={education.studies} />
        <Group title="Cursos realizados" items={education.courses} />
        <Group title="Certificaciones" items={education.certifications} />
        <Group title="Reconocimientos" items={education.awards} />
        <Group title="Formación complementaria" items={education.extra} />
      </div>
    </AnimatedSection>
  );
}
