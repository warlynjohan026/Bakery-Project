import express from 'express';
import "dotenv/config";
const app = express();
dotenv.config();


app.get('/', (req, res) => {
    res.send('First server for backend again')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server listeting at http://localhost: ${PORT}`)
})