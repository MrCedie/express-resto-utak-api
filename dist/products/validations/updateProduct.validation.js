"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.udpateProductSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.udpateProductSchema = joi_1.default.object({
    category: joi_1.default.string().messages({
        "string.base": "Category must be a string",
    }),
    name: joi_1.default.string().messages({
        "string.base": "Name must be a string",
    }),
    price: joi_1.default.number().messages({
        "number.base": "Price must be a number",
    }),
    cost: joi_1.default.number().messages({
        "number.base": "Cost must be a number",
    }),
    stock: joi_1.default.number().messages({
        "number.base": "Stock must be a number",
    }),
    options: joi_1.default.array()
        .items(joi_1.default.object({
        name: joi_1.default.string().messages({
            "string.base": "Option name must be a string",
        }),
        price: joi_1.default.number().messages({
            "number.base": "Option price must be a number",
        }),
    }))
        .messages({
        "array.base": "Options must be an array",
    }),
});
