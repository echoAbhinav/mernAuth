import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js"; 
import authRouter from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));

app.get('/', (req, res) => res.send("API WORKING AGAIN"));
app.use('/api/auth', authRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
