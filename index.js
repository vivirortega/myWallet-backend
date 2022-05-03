import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import joi from "joi";
import { MongoClient } from "mongodb";

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;
mongoClient.connect().then(() => {
  db = mongoClient.db("my_wallet");
  console.log("Conectado ao banco de dados com sucesso");
});

app.listen(5000, () => console.log("Server working"));
