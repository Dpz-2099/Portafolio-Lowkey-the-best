import type { EducationData } from "@/types";

// ✏️ Reemplaza los ejemplos con tus datos reales. Si una lista no aplica, déjala como [].
export const education: EducationData = {
  studies: [
    {
      title: "Ingeniería Informática (proximamente)",
      place: "Uca",
      period: "2027- en el futuro",
      detail: "Estudios actuales.",
    },
  ],
  courses: [
    { title: "Bachillerato", place: "Instituto Emiliani", period: "2018-2026" },
  ],
  certifications: [
    { title: "Certifiacion MOS Excel Expert", place: "Supérate Fundacion Frech", period: "marzo 2026" },
        { title: "Certifiacion Toeic Speaking and Writing ", place: "Supérate Fundacion Frech", period: "Noviembre 2026" },
        { title: "Certifiacion Toeic Listeanig and Reading", place: "Supérate Fundacion Frech", period: "Noviembre 2026" },
  ],
  awards: [
    { title: "Primer Lugar Expo Tecnica ", place: "Instituto Emiliani ", period: "2025" },
      { title: "Segundo Lugar Expo Tecnica ", place: "Instituto Emiliani ", period: "2026" },
  ],
  extra: [
    { title: "Curso de Platzi", place: "Platzi", period: "2026" },
  ],
};
