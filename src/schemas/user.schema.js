import joi from "joi";

export const signUpSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    telefone: joi.string().required(),
    cidade: joi.string().required(),
    password: joi.string().min(3).pattern(new RegExp('^[a-zA-Z0-9_]{3,30}$')),
    confirmPassword: joi.ref('password')
  });

export const signInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(3).pattern(new RegExp('^[a-zA-Z0-9_]{3,30}$')),
  });