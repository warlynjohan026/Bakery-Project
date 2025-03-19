import express from "express";
import sendContactEmail from "../Helper/emailService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, number, message } = req.body;

  try {
    const emailResponse = await sendContactEmail(name, number, message);
    res.status(200).json({ message: "Correo enviado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al enviar correo" });
  }
});

export default router;
