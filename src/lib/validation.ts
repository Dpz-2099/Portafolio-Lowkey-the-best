// Validación del formulario de contacto.
// Se usa en DOS lugares: en el navegador (respuesta rápida) y en el servidor
// (/api/contact). El servidor SIEMPRE vuelve a validar, porque el navegador se puede saltar.

export type ContactInput = { name: string; email: string; message: string };
export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

export const LIMITS = { nameMin: 2, nameMax: 80, messageMin: 10, messageMax: 2000 };

// Formato simple: algo@dominio.ext, sin espacios.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(data: Partial<Record<keyof ContactInput, unknown>>): {
  values: ContactInput;
  errors: ContactErrors;
} {
  // Convierte a texto y quita espacios al inicio y al final
  const clean = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const values: ContactInput = {
    name: clean(data.name),
    email: clean(data.email),
    message: clean(data.message),
  };
  const errors: ContactErrors = {};

  if (!values.name) errors.name = "Escribe tu nombre.";
  else if (values.name.length < LIMITS.nameMin) errors.name = "El nombre es muy corto.";
  else if (values.name.length > LIMITS.nameMax)
    errors.name = `El nombre no puede pasar de ${LIMITS.nameMax} caracteres.`;

  if (!values.email) errors.email = "Escribe tu correo.";
  else if (!EMAIL_RE.test(values.email)) errors.email = "Escribe un correo válido (ej. nombre@correo.com).";

  if (!values.message) errors.message = "Escribe un mensaje.";
  else if (values.message.length < LIMITS.messageMin)
    errors.message = `El mensaje debe tener al menos ${LIMITS.messageMin} caracteres.`;
  else if (values.message.length > LIMITS.messageMax)
    errors.message = `El mensaje no puede pasar de ${LIMITS.messageMax} caracteres.`;

  return { values, errors };
}
