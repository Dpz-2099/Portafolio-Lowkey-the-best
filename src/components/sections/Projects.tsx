"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import TechBadge from "@/components/ui/TechBadge";
import { Github } from "@/components/ui/Icons";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

// Un bloque de texto con título (se usa varias veces dentro de cada proyecto)
function Detail({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <h4 className="font-display text-lg text-accent">{label}</h4>
      <p className="leading-relaxed">{text}</p>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="card-pop flex flex-col overflow-hidden">
      {/* Captura de pantalla o espacio reservado */}
      {project.images[0] ? (
        <Image
          src={project.images[0]}
          alt={`Captura de ${project.name}`}
          width={800}
          height={450}
          className="h-48 w-full border-b-[3px] border-ink object-cover"
        />
      ) : (
        <div className="flex h-48 items-center justify-center border-b-[3px] border-ink bg-surface2 text-sm font-bold text-muted">
          🖼️ Captura de pantalla (public/proyectos/)
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent2">
            {project.week}
          </span>
          <h3 className="font-display text-3xl leading-tight">{project.name}</h3>
          <p className="mt-2 text-muted">{project.description}</p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t}>
              <TechBadge>{t}</TechBadge>
            </li>
          ))}
        </ul>

        {open && (
          <div className="space-y-4 border-t-2 border-dashed border-ink/40 pt-4">
            <Detail label="Problema que resuelve" text={project.problem} />
            <Detail label="Objetivo de la actividad" text={project.objective} />
            <Detail label="Solución implementada" text={project.solution} />
            <Detail label="Resultados obtenidos" text={project.results} />
            {project.images.length > 1 && (
              <div className="grid grid-cols-2 gap-3">
                {project.images.slice(1).map((src) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`Captura adicional de ${project.name}`}
                    width={400}
                    height={225}
                    className="card-pop-sm w-full object-cover"
                  />
                ))}
              </div>
            )}
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          <button
            type="button"
            className="btn btn-primary !px-4 !py-2 text-sm"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
          >
            {open ? "Ver menos" : "Ver detalles"}
          </button>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost !px-4 !py-2 text-sm"
            >
              <Github size={16} /> Repositorio
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost !px-4 !py-2 text-sm"
            >
              <ExternalLink size={16} /> Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <AnimatedSection id="proyectos">
      <SectionHeading
        number="03"
        title="Proyectos"
        subtitle="Lo que construí durante las 10 semanas. Abre cada tarjeta para ver el detalle completo."
      />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </AnimatedSection>
  );
}
