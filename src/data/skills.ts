import type { SkillCategory } from "@/types";

// ✏️ Deja SOLO lo que realmente conoces. Nivel: 1 = básico ... 5 = avanzado.
// Los nombres de abajo son ejemplos del stack del proyecto: ajústalos a tu realidad.
export const skills: SkillCategory[] = [
  {
    title: "Lenguajes de programación",
    skills: [
      { name: "JavaScript", level: 3 },
      { name: "TypeScript", level: 2 },
      { name: "Python", level: 2 },
    ],
  },
  {
    title: "Desarrollo web",
    skills: [
      { name: "HTML y CSS", level: 4 },
      { name: "React", level: 2 },
      { name: "Next.js", level: 2 },
      { name: "Tailwind CSS", level: 2 },
    ],
  },

  {
    title: "Herramientas tecnológicas",
    skills: [
      { name: "Git y GitHub", level: 5 },
      { name: "Vercel", level: 1 },
      { name: "VS Code", level: 4 },
    ],
  },
  {
    title: "Inteligencia artificial y Machine Learning",
    skills: [{ name: "Herramientas de IA generativa", level: 3 }],
  },
  {
    title: "Habilidades personales",
    skills: [
      { name: "Trabajo en equipo", level: 4 },
      { name: "Comunicación", level: 3 },
      { name: "Resolución de problemas", level: 3 },
    ],
  },
];
