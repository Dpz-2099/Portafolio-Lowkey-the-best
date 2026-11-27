"use client";

import { motion } from "framer-motion";

// Envuelve una sección: aparece con un fundido y un pequeño movimiento al hacer scroll.
// `once: true` -> solo se anima la primera vez que se ve.
export default function AnimatedSection({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      className={`mx-auto max-w-6xl px-4 py-20 ${className}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
