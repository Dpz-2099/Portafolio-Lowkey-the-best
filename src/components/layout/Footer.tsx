import { PROFILE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-surface px-4 py-8 text-center">
      <p className="font-display text-xl">{PROFILE.name}</p>
      <p className="mt-1 text-sm text-muted">
        © {new Date().getFullYear()} · Hecho con Next.js, React, TypeScript y Tailwind CSS
      </p>
    </footer>
  );
}
