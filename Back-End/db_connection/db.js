import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URL = process.env.MONGO_DB_KEY;


const db = async () => {
    try {
        const connection = await mongoose.connect(MONGO_URL);
        console.log(`Database connected successfully`)
    } catch (error) {
        console.log(`Unable to connect because of ${error}`)
    }
}

export default db;