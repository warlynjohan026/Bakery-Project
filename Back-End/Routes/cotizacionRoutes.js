import express from "express";
import sendCotizacionEmail from "../Helper/emailCotizacionService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, number, oferta, message } = req.body;

  try {
    const emailResponse = await sendCotizacionEmail(name, number, oferta, message);
    res.status(200).json({ message: "Correo enviado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al enviar correo" });
  }
});

export default router;
