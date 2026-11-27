import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <AnimatedSection id="experiencia">
      <SectionHeading
        number="02"
        title="Experiencia"
        subtitle="Proyectos, actividades y responsabilidades que me han formado."
      />

      {/* Línea de tiempo vertical */}
      <ol className="relative ml-3 space-y-8 border-l-[3px] border-ink pl-8">
        {experience.map((item) => (
          <li key={item.title} className="relative">
            <span className="absolute -left-[2.65rem] top-2 h-5 w-5 rounded-full border-[3px] border-ink bg-accent" />
            <article className="card-pop p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-2xl">{item.title}</h3>
                <span className="card-pop-sm !bg-accent2 px-3 py-0.5 text-xs font-extrabold text-white">
                  {item.type}
                </span>
              </div>
              <p className="mt-1 text-sm font-bold text-muted">
                {item.place} · {item.period}
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </AnimatedSection>
  );
}
