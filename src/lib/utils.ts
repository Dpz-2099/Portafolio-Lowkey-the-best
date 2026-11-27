import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Une clases de Tailwind sin que se pisen entre sí: cn("px-2", cond && "px-4") -> "px-4"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
