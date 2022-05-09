import registerSchema from "../schemas/registerSchema.js";

export async function validRegister(req, res, next) {
    const register = req.body;
    console.log(register);
    const validation = registerSchema.validate(register);
    if (validation.error) {
      res.sendStatus(422);
      return;
    }

    next();
}