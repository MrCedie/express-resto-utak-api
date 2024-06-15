import Joi from "joi";

export const udpateProductSchema = Joi.object({
  category: Joi.string().messages({
    "string.base": "Category must be a string",
  }),
  name: Joi.string().messages({
    "string.base": "Name must be a string",
  }),
  price: Joi.number().messages({
    "number.base": "Price must be a number",
  }),
  cost: Joi.number().messages({
    "number.base": "Cost must be a number",
  }),
  stock: Joi.number().messages({
    "number.base": "Stock must be a number",
  }),
  options: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().messages({
          "string.base": "Option name must be a string",
        }),
        price: Joi.number().messages({
          "number.base": "Option price must be a number",
        }),
      })
    )
    .messages({
      "array.base": "Options must be an array",
    }),
});
