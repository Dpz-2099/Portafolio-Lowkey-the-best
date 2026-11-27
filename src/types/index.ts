export type Project = {
  name: string;
  description: string;
  problem: string;
  objective: string;
  tech: string[];
  images: string[]; // rutas dentro de /public, ej. "/proyectos/semana1.png"
  solution: string;
  results: string;
  repo?: string; // enlace al repositorio o archivos
  demo?: string; // enlace publicado, si existe
};

export type SkillItem = {
  name: string;
  level: 1 | 2 | 3 | 4 | 5; // 1 = básico, 5 = avanzado
};

export type SkillCategory = {
  title: string;
  skills: SkillItem[];
};

export type ExperienceItem = {
  title: string;
  place: string;
  period: string;
  type: "Laboral" | "Práctica" | "Proyecto" | "Extracurricular" | "Voluntariado" | "Académica";
  points: string[];
};

export type EducationItem = {
  title: string;
  place: string;
  period: string;
  detail?: string;
};

export type EducationData = {
  studies: EducationItem[];
  courses: EducationItem[];
  certifications: EducationItem[];
  awards: EducationItem[];
  extra: EducationItem[];
};
