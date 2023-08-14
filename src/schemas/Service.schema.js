import joi from "joi";

export const ServiceSchema = joi.object({
    titulo: joi.string().required(),
    descricao: joi.string().required(), 
    imagem: joi.string().required(),
    preco: joi.string().required(),
    name: joi.string().required()
  });