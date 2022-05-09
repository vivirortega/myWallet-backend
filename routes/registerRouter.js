import { Router } from "express";
import { getRegisters, postRegisters } from "../controllers/walletController.js";
import { validRegister } from "../middlewares/registerMiddleware.js";

const registerRouter = Router();

registerRouter.get("/wallet", getRegisters);
registerRouter.post("/registers", validRegister, postRegisters);

export default registerRouter;