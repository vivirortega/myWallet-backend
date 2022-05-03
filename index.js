import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import joi from "joi";
import { MongoClient } from "mongodb";


const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());