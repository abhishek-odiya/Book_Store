import express from "express";
import { connectDB } from "./database.js";
import dotenv from "dotenv";
import createBook from "./routes/book.routes.js"
import cors from "cors";



// .env config & ConnectDB to connect with database
dotenv.config();
connectDB();

const app = express();
app.use(cors());

// Allow to store data in JSON
app.use(express.json());

// http://localhost:8000/book
app.use("/book", createBook);


const PORT = 8000 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`Port listening on ${PORT}`);
});