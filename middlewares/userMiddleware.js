import signupSchema from "../schemas/signupSchema.js";
import loginSchema from "../schemas/loginSchema.js";

export async function validHeader(req, res, next) {
    const signup = req.body;
    const validation = signupSchema.validate(signup);
    if (validation.error) {
      res.sendStatus(422);
      return;
    }

    next();
}

export async function validLogin(req, res, next){
  const login = req.body;
  const validation = loginSchema.validate(login);
  if(validation.error){
    res.sendStatus(422);
    return;
  }
  next();
}