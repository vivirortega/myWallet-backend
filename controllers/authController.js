import { v4 as uuid } from "uuid";
import db from "../database/db.js";
import bcrypt from "bcrypt";

export async function signup(req, res) {
  try {
    const { name, email, password } = req.body;
    const passwordEncrypted = bcrypt.hashSync(password, 10);
    console.log(name, email, password);
    await db
      .collection("users")
      .insertOne({ ...req.body, password: passwordEncrypted });
    res.sendStatus(201);
  } catch (e) {
    res.sendStatus(500);
    console.log("Erro ao registrar", e);
  }
}

export async function signin(req, res) {
  const login = req.body;
  try {
    const user = await db.collection("users").findOne({ email: login.email });
    if (user && bcrypt.compareSync(login.password, user.password)) {
      const token = uuid();
      await db.collection("sessions").insertOne({ token, userId: user._id });
      res.send(token);
    }
  } catch (e) {
    res.sendStatus(500);
    console.log("Erro ao entrar no app", e);
  }
}
