"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createProductSchema = joi_1.default.object({
    category: joi_1.default.string().required().messages({
        "string.base": "Category must be a string",
        "any.required": "Category is required",
    }),
    name: joi_1.default.string().required().messages({
        "string.base": "Name must be a string",
        "any.required": "Name is required",
    }),
    price: joi_1.default.number().required().messages({
        "number.base": "Price must be a number",
        "any.required": "Price is required",
    }),
    cost: joi_1.default.number().required().messages({
        "number.base": "Cost must be a number",
        "any.required": "Cost is required",
    }),
    stock: joi_1.default.number().required().messages({
        "number.base": "Stock must be a number",
        "any.required": "Stock is required",
    }),
    options: joi_1.default.array()
        .items(joi_1.default.object({
        name: joi_1.default.string().required().messages({
            "string.base": "Option name must be a string",
            "any.required": "Option name is required",
        }),
        price: joi_1.default.number().required().messages({
            "number.base": "Option price must be a number",
            "any.required": "Option price is required",
        }),
    }))
        .required()
        .messages({
        "array.base": "Options must be an array",
        "any.required": "Options are required",
    }),
});
