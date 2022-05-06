import signupSchema from "../schemas/signupSchema.js";

export default async function validHeader(req, res, next) {
    const signup = req.body;
    const validation = signupSchema.validate(signup);
    if (validation.error) {
      res.sendStatus(422);
      return;
    }

    next();
}
