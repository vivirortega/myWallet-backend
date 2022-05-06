import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./database/db.js"
import authRouter from "./routes/authRouter.js";
import userMiddleware from "./middlewares/userMiddleware.js"

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
app.use(authRouter);
app.use(userMiddleware);


app.listen(process.env.PORT, () => console.log("Server working"));
