import joi from "joi"

export const userSchema = joi.object({
    name: joi.string().required().min(3),
    email: joi.string().email().required().min(5),
    password: joi.string().required().min(3),
  });

  export const transactionsSchema = joi.object({
    value: joi.number().required(),
    description: joi.string().required().min(5),
    type: joi.string().required().valid("entrada", "saida"),
    user: joi.object().required(),
    ts_day: joi.string().required(),
  });