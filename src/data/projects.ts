import type { Project } from "@/types";

// ✏️ EJEMPLOS: reemplázalos por tus proyectos reales de las 10 semanas.
// Para agregar uno nuevo, copia un bloque { ... } y cámbialo. No toques el diseño.
// Imágenes: guárdalas en public/proyectos/ y escribe la ruta, ej. "/proyectos/semana1.png"
export const projects: Project[] = [
  {
    name: "Regresion Lineal ",
    description: "Enseñar como pedirle a una computadora que prediga un numero ",
    problem: "Identificar la calificacion de un estudiante segun las horas de estudio",
    objective: "Saber segun horas de estudio la calificacion estimada",
    tech: ["Python"],
    images: ["/proyecto/regresion .png"],
    solution: "lo resolvi usando un codigo para que la computadora aprenda a predecir un numero segun los datos que le des",
    results: "saber segun las horas de estudio la calificacion estimada",
    repo: "https://github.com/Dpz-2099/Portafolio-Lowkey-the-best/blob/main/regresionl.py",
  },
  {
    name: "Laberinto",
    description: "Juego de laberinto ",
    problem: "como generar laberintos aleatorios",
    objective: "Crear laberintos con diferentes patrones y algun detalle como los colores randoms",
    tech: ["Python"],
    images: ["/proyecto/laberinto.png"],
    solution: "con un codigo que generara patrones diferentes cada vez que presionabamos la r que estaba designada como reinicio.",
    results: "La creacion de patrones diferentes de laberintos y la posibilidad de reiniciar el juego y que se generara un nuevo laberinto con un patron diferente",
    repo: "https://github.com/Dpz-2099/Portafolio-Lowkey-the-best/blob/main/laberinto.py",
  },
  {
    name: "AI Challenge- K-Means y KNN",
    description: "Practica para poner en prueba los conocimientos sobre K-Means y KNN",
    problem: "Los estudiantes y sus habitos",
    objective: "comparar el k-means y el knn ",
    tech: ["Python"],
    images: ["/proyecto/Kmeans.png"],
    solution: "Explica cómo lo resolviste: pasos, decisiones y herramientas.",
    results: "Entender mejor sobre el funcionamiento de K-Means y KNN y como se comparan entre si",
    repo: "https://github.com/Dpz-2099/Portafolio-Lowkey-the-best/blob/main/ai_challenge_kmeans_knn.py",
  },
    {
    name: "SortlyScan",
    description: "Una pagina web para escuelas publicas para un mejor y mas interactivo aprendizaje de los estudiantes sobre el reciclaje",
    problem: "La falta de consentimiento y enseñanza sobre el reciclaje en las escuelas publicas",
    objective: "Dar una herramienta que insentivara a los niños a aprender sobre el reciclaje y a la vez que se diviertan y aprendan de una manera mas interactiva",
    tech: ["TypeScript", "CSS", "JavaScript", "Python"],
    images: ["/proyecto/landing-page.png"],
    solution: "Creamos una pagina web con un diseño facil de entender y llamativo junto a herramientas para los profes para enseñar de manera divertida",
    results: "Logramos entender mas sobre las tecnologias y como llevarlo a cabo en un entorno escolar y que efectos tendria ",
    repo: "https://github.com/Dpz-2099/Portafolio-Lowkey-the-best/tree/main/SortlyScan_ExpoTech-main",
  },
     {
    name: "Portafolio Backend y Frontend",
    description: "Portafolio para mostrar mis proyectos y habilidades en el desarrollo web",
    problem: "Mostrar en un lugar todos mis proyectos de una forma creativa que yo mismo hice",
    objective: "Dar a conocer mis habilidades y proyectos de una manera creativa y llamativa",
    tech: ["TypeScript", "CSS", "JavaScript", "Python", "Next.js", "React", "TailwindCSS", "Github"],
    images: ["/public/portafolio.png"],
    solution: "La creacion de una pagina web como portafolio para mostrar todos mis proyectos actuales y futuros ademas de darme a conocer mis habilidades",
    results: "A desplegar en vercel, como trabajar una pagina web para subirla y saber diseñar con mi toque personal ",
    repo: "https://github.com/Dpz-2099/Portafolio-Lowkey-the-best",
  },
];
