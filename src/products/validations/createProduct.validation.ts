import Joi from "joi";

export const createProductSchema = Joi.object({
  category: Joi.string().required().messages({
    "string.base": "Category must be a string",
    "any.required": "Category is required",
  }),
  name: Joi.string().required().messages({
    "string.base": "Name must be a string",
    "any.required": "Name is required",
  }),
  price: Joi.number().required().messages({
    "number.base": "Price must be a number",
    "any.required": "Price is required",
  }),
  cost: Joi.number().required().messages({
    "number.base": "Cost must be a number",
    "any.required": "Cost is required",
  }),
  stock: Joi.number().required().messages({
    "number.base": "Stock must be a number",
    "any.required": "Stock is required",
  }),
  options: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().required().messages({
          "string.base": "Option name must be a string",
          "any.required": "Option name is required",
        }),
        price: Joi.number().required().messages({
          "number.base": "Option price must be a number",
          "any.required": "Option price is required",
        }),
      })
    )
    .required()
    .messages({
      "array.base": "Options must be an array",
      "any.required": "Options are required",
    }),
});
