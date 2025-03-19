import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactEmail = async (name, number, message) => {
  try {
    const result = await resend.emails.send({
      from: "Cliente MaryCake <onboarding@resend.dev>",
      to: "warlynjohan0126@gmail.com",
      subject: "Nuevo Mensaje de Contacto Marycake",
      html: `
      <h2><strong>Nuevo Mensaje de Contacto de MaryCake</strong></h2>
        <p><strong>Detalles del Cliente:</strong></p>
        <ul>
          <li><strong>Nombre:</strong> ${name}</li>
          <li><strong>Número de Teléfono:</strong> ${number}</li>
        </ul>
        <p><strong>Mensaje del Cliente:</strong></p>
        <blockquote style="border-left: 4px solid #ccc; padding-left: 10px;">
          ${message}
        </blockquote>
      `,
    });
    return result;
  } catch (error) {
    throw new Error("Error sending email: " + error.message);
  }
};

export default sendContactEmail;
