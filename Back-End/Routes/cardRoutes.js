import express from 'express'
import cardOffer from "../Models/cardModel.js";


const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const cards = await cardOffer.find();
        res.status(200).json(cards)
    } catch (error) {
        res.status(500).json({message: 'Error al obtener Card', error})
    }
})

export default router