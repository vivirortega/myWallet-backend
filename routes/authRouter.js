import { Router } from "express";
import {signup} from "../controllers/authController.js";
import validHeader from "../middlewares/userMiddleware.js";

const authRouter = Router();

authRouter.post("/sign-up", validHeader, signup);

export default authRouter;