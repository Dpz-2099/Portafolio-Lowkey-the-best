import { validateContact } from "@/lib/validation";

// POST /api/contact
// Recibe JSON { name, email, message }, lo valida y envía el correo con Resend.
// Siempre responde JSON: { ok: true, message } o { ok: false, message, errors? }.
//
// Las claves viven en variables de entorno (NUNCA en el código):
//   RESEND_API_KEY      -> clave privada de Resend
//   CONTACT_TO_EMAIL    -> correo donde recibes los mensajes
//   CONTACT_FROM_EMAIL  -> remitente (con Resend gratis: onboarding@resend.dev)

// Escapa caracteres HTML para que nadie pueda inyectar código en el correo.
function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  // 1) Leer el JSON del cuerpo. Si viene mal formado -> 400.
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, message: "La solicitud no es un JSON válido." }, { status: 400 });
  }
  if (typeof body !== "object" || body === null) {
    return Response.json({ ok: false, message: "Faltan los datos del formulario." }, { status: 400 });
  }

  // 2) Validar nombre, correo y mensaje. Si algo falla -> 422 con el detalle por campo.
  const { values, errors } = validateContact(body as Record<string, unknown>);
  if (Object.keys(errors).length > 0) {
    return Response.json(
      { ok: false, message: "Revisa los campos del formulario.", errors },
      { status: 422 },
    );
  }

  // 3) Leer las variables de entorno. Si faltan, es un problema del servidor -> 500.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("Faltan variables de entorno: RESEND_API_KEY, CONTACT_TO_EMAIL o CONTACT_FROM_EMAIL");
    return Response.json(
      { ok: false, message: "El servidor no está configurado para enviar correos." },
      { status: 500 },
    );
  }

  // 4) Enviar el correo con la API de Resend (no hace falta instalar nada).
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email, // al dar "Responder" le contestas al visitante
        subject: `Mensaje desde tu portafolio - ${values.name}`,
        html:
          `<p><strong>Nombre:</strong> ${escapeHtml(values.name)}</p>` +
          `<p><strong>Correo:</strong> ${escapeHtml(values.email)}</p>` +
          `<p><strong>Mensaje:</strong></p>` +
          `<p>${escapeHtml(values.message).replace(/\n/g, "<br>")}</p>`,
      }),
    });

    if (!res.ok) {
      // El detalle va a la consola del servidor, NO al visitante.
      console.error("Resend respondió con error:", res.status, await res.text());
      return Response.json(
        { ok: false, message: "No se pudo enviar el mensaje. Intenta de nuevo más tarde." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("Error de red al enviar el correo:", err);
    return Response.json(
      { ok: false, message: "No se pudo enviar el mensaje. Intenta de nuevo más tarde." },
      { status: 502 },
    );
  }

  // 5) Todo bien -> 200
  return Response.json({ ok: true, message: "¡Mensaje enviado! Te responderé pronto." });
}
