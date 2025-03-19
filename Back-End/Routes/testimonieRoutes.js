import express, { Router } from "express";
import TestimonyComments from "../Models/testimonieModel.js";

const router = new express.Router();

router.get("/", async (req, res) => {
  try {
    const testimonies = await TestimonyComments.find();
    res.status(200).json(testimonies);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener Card", error });
  }
});

export default router;
