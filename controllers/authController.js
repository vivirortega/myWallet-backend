import { v4 as uuid } from "uuid";
import db from "../database/db.js"
import bcrypt from "bcrypt";

export async function signup(req, res) {
  try {
    const { name, email, password } = req.body;
    const passwordEncrypted = bcrypt.hashSync(password, 10);
    console.log(name, email, password)
    await db
      .collection("users")
      .insertOne({ ...signup, password: passwordEncrypted });
    res.sendStatus(201);
  } catch (e) {
    res.sendStatus(500);
    console.log("Erro ao registrar", e);
  }
}
