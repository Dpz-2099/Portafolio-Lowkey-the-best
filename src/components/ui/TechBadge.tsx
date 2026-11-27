// Etiqueta pequeña para tecnologías (ej. "React", "Tailwind CSS").
export default function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="card-pop-sm inline-block !bg-surface2 px-2.5 py-0.5 text-xs font-extrabold">
      {children}
    </span>
  );
}
