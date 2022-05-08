import { Router } from "express";
import {signin, signup} from "../controllers/authController.js";
import { validHeader, validLogin} from "../middlewares/userMiddleware.js";

const authRouter = Router();

authRouter.post("/sign-up", validHeader, signup);
authRouter.post("/sign-in", validLogin, signin);

export default authRouter;