import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.routes.js"
import cors from "cors"

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())



app.use("/api/auth", authRoutes)
app.get('/', (req, res) => res.send('Antenatal App API'));




export default app;
