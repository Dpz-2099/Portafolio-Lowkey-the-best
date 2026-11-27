"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/constants";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-[3px] border-ink bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#inicio" className="font-display text-2xl text-accent">
          JJ<span className="text-ink">AG</span>
        </a>

        {/* Menú de escritorio */}
        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded px-3 py-2 text-sm font-bold transition hover:bg-accent hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
        
          <button
            type="button"
            className="btn btn-ghost !p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <nav
          aria-label="Principal móvil"
          className="border-t-[3px] border-ink bg-bg px-4 py-3 lg:hidden"
        >
          <ul className="grid gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded px-3 py-2 font-bold hover:bg-accent hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
