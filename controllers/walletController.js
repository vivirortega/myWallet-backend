import { v4 as uuid } from "uuid";
import db from "../database/db.js";
import dayjs from "dayjs";
import bcrypt from "bcrypt";

export async function getRegisters(req, res) {
  const { user } = res.locals;

  try {
    const registers = await db
      .collection("registers")
      .find({ userId: user._id })
      .toArray();
    res.status(200).send(registers);
  } catch (e) {
    res.sendStatus(500);
    console.log("erro ao pegar os registros", e);
  }
}

export async function postRegisters(req, res) {
  const day = dayjs().format("DD/MM");
  const { value, description } = req.body;
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");
  if (!token) {
    console.log("deu erro no token");
    res.sendStatus(401);
    return;
  }

  const session = await db.collection("sessions").findOne({ token });
  if (!session) {
    console.log("deu erro na sessao");
    res.status(401).send(authorization);
    return;
  }

  try {
    await db.collection("registers").insertOne({
      value: value,
      description: description,
      day,
    });
    res.status(201).send("operação feita com sucesso");
  } catch (e) {
    res.sendStatus(500);
    console.log("Erro ao adicionar uma nova operação", e);
  }
}
