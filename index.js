import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./database/db.js"
import authRouter from "./routes/authRouter.js";

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
app.use(authRouter);


app.listen(process.env.PORT, () => console.log("Server working"));
