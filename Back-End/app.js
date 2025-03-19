import express from 'express';
import dotenv from 'dotenv'
import db from './db_connection/db.js'
import cardRoutes from './Routes/cardRoutes.js'
import galleryRoutes from './Routes/galleryRoutes.js'
import testimonieRoutes from './Routes/testimonieRoutes.js'
import contactRoutes from './Routes/contactRoutes.js'
import cotizacionRoutes from './Routes/cotizacionRoutes.js'
import cors from 'cors'


const app = express();
dotenv.config();
app.use(cors());
db();
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.get("/", (req, res) => {
    return res.send("Connected, vamos a ver que tenemos")
})

app.use('/api/card', cardRoutes)
app.use('/api/gallery', galleryRoutes)
app.use('/api/testimonies', testimonieRoutes);
app.use('/api/contact/send-contact-message', contactRoutes);
app.use("/api/contact/send-cotizacion-message", cotizacionRoutes);



app.listen(PORT, () => {
    console.log(`Server listeting at http://localhost:${PORT}`)
})