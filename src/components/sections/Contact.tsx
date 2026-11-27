"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { Github, Linkedin } from "@/components/ui/Icons";
import { PROFILE } from "@/lib/constants";
import { validateContact, type ContactErrors } from "@/lib/validation";

type Status = { type: "ok" | "error"; text: string } | null;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);

    // 1) Validación en el navegador (misma función que usa el servidor)
    const { values, errors: found } = validateContact({ name, email, message });
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // 2) Enviar al endpoint POST /api/contact
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus({ type: "ok", text: data.message });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        // El servidor puede devolver errores por campo (422) o un mensaje general
        if (data.errors) setErrors(data.errors);
        setStatus({ type: "error", text: data.message ?? "Ocurrió un error." });
      }
    } catch {
      setStatus({ type: "error", text: "No se pudo conectar con el servidor." });
    } finally {
      setLoading(false);
    }
  }

  const base =
    "w-full border-2 border-ink/40 bg-bg px-3 py-2 font-mono text-base text-ink outline-none transition placeholder:text-muted/60 focus:border-accent2 focus:shadow-[0_0_0_3px_rgb(var(--accent2)/0.35)] aria-[invalid=true]:border-accent";

  const channels = [
    { label: "Correo", value: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: <Mail size={22} /> },
    { label: "GitHub", value: "Ver repositorios", href: PROFILE.github, icon: <Github size={22} />, external: true },
    { label: "LinkedIn", value: "Conectemos", href: PROFILE.linkedin, icon: <Linkedin size={22} />, external: true },
  ];

  return (
    <AnimatedSection id="contacto">
      <SectionHeading
        number="06"
        title="Contacto"
        subtitle="Abre un canal de comunicación: respondo todos los mensajes."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Columna izquierda: canales como botones grandes */}
        <div className="space-y-4 lg:col-span-2">
          <p className="font-display text-xs leading-loose text-muted">Elige un canal</p>
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-center gap-4 border-2 border-ink bg-surface p-4 shadow-[5px_5px_0_0_rgb(var(--accent))] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-accent2 hover:shadow-[7px_7px_0_0_rgb(var(--accent2))]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-ink bg-accent text-white transition group-hover:bg-accent2">
                {c.icon}
              </span>
              <span className="min-w-0">
                <span className="font-display block text-xs text-accent2">{c.label}</span>
                <span className="block truncate text-lg font-bold">{c.value}</span>
              </span>
            </a>
          ))}
        </div>

        {/* Columna derecha: formulario como ventana de terminal */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="overflow-hidden border-2 border-ink bg-surface shadow-[8px_8px_0_0_rgb(var(--accent2))] lg:col-span-3"
        >
          {/* Barra de título de la ventana */}
          <div className="flex items-center gap-2 border-b-2 border-ink bg-surface2 px-4 py-2">
            <span className="h-3 w-3 rounded-full bg-accent" />
            <span className="h-3 w-3 rounded-full bg-accent2" />
            <span className="h-3 w-3 rounded-full bg-ink/60" />
            <span className="ml-3 font-mono text-sm text-muted">nuevo_mensaje.exe</span>
          </div>

          <div className="space-y-5 p-5">
            <div>
              <label htmlFor="name" className="mb-1 block font-mono text-sm text-accent2">
                &gt; nombre
              </label>
              <input
                id="name"
                placeholder="¿Cómo te llamas?"
                aria-invalid={!!errors.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={base}
              />
              {errors.name && (
                <p role="alert" className="mt-1 font-mono text-sm font-bold text-accent">
                  ! {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block font-mono text-sm text-accent2">
                &gt; correo
              </label>
              <input
                id="email"
                type="email"
                placeholder="tu@correo.com"
                aria-invalid={!!errors.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={base}
              />
              {errors.email && (
                <p role="alert" className="mt-1 font-mono text-sm font-bold text-accent">
                  ! {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block font-mono text-sm text-accent2">
                &gt; mensaje
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Escribe tu mensaje aquí..."
                aria-invalid={!!errors.message}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={base}
              />
              <div className="mt-1 flex justify-between font-mono text-sm">
                {errors.message ? (
                  <p role="alert" className="font-bold text-accent">
                    ! {errors.message}
                  </p>
                ) : (
                  <span />
                )}
                <span className="text-muted">{message.length}/2000</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="font-display flex w-full items-center justify-center gap-3 border-2 border-ink bg-accent px-4 py-3 text-sm text-white shadow-[4px_4px_0_0_rgb(var(--ink))] transition hover:-translate-y-0.5 hover:bg-accent2 active:translate-y-0.5 active:shadow-none disabled:opacity-60"
            >
              <Send size={16} /> {loading ? "Enviando..." : "Enviar mensaje"}
            </button>

            {status && (
              <p
                role={status.type === "error" ? "alert" : "status"}
                className={`border-2 p-3 font-mono text-sm font-bold ${
                  status.type === "ok"
                    ? "border-accent2 bg-accent2/15 text-ink"
                    : "border-accent bg-accent/15 text-ink"
                }`}
              >
                {status.type === "ok" ? "✔ " : "✖ "}
                {status.text}
              </p>
            )}
          </div>
        </form>
      </div>
    </AnimatedSection>
  );
}
