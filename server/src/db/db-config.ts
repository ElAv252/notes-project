import { config } from "dotenv";
import mongoose from "mongoose";

config();
export default function dbConnection() {
    console.log(process.env.DB_URL)
    mongoose.connect(process.env.DB_URL || '')
        .then(() => console.log('Connected!'));
}
