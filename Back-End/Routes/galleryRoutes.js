import express, { Router } from 'express'
import GalleryImgs from '../Models/galleryModel.js'

const router = new express.Router();

router.get('/', async (req, res) => {
    try {
        const gallery = await GalleryImgs.find();
        res.status(200).json(gallery)
    } catch (error) {
        res.status(500).json({ message: "Error al obtener Card", error });
    }

})

export default router