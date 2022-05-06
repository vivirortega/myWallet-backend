import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

let db = null;
const mongoClient = new MongoClient(process.env.MONGO_URI);
await mongoClient.connect();

try {
  await mongoClient.connect();
  db = mongoClient.db(process.env.DATABASE);
  console.log("Conexão com o banco de dados feito com sucesso");
} catch (e) {
  console.log("Erro ao se conectar com o banco de dados", e);
}

export default db;
