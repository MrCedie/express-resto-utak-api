"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.removeProduct = exports.createProduct = exports.getProduct = exports.getProducts = void 0;
const productsService = __importStar(require("./products.service"));
const express_validator_1 = require("express-validator");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productsService.getProducts();
        if (!products) {
            res.status(200).send([]);
        }
        else {
            res.status(200).send(products);
        }
    }
    catch (error) {
        res.status(400).send(`Error fetching item: ${error}`);
    }
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield productsService.getProductsById(req.params.id);
        if (!product) {
            res.status(404).send("product not found");
        }
        else {
            res.status(200).send(product);
        }
    }
    catch (error) {
        res.status(400).send(`Error fetching item: ${error}`);
    }
});
exports.getProduct = getProduct;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const product = yield productsService.addProduct(req.body);
        if (!product) {
            res.status(400).send("bad request");
        }
        else {
            res.status(201).send(product);
        }
    }
    catch (error) {
        res.status(400).send(`Error fetching item: ${error}`);
    }
});
exports.createProduct = createProduct;
const removeProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield productsService.removeProduct(req.params.id);
        if (!product) {
            res.status(404).send({ error: "product not found" });
            return;
        }
        else {
            res.status(200).send(product);
        }
    }
    catch (error) {
        console.log(error);
        res.status(400).send(`Error fetching item: ${error}`);
    }
});
exports.removeProduct = removeProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const product = yield productsService.updateProduct(req.params.id, req.body);
        if (!product) {
            res.status(404).send({ error: "Product not found" });
            return;
        }
        else {
            res.status(200).send(product);
        }
    }
    catch (error) {
        res.status(400).send(`Error fetching item: ${error}`);
    }
});
exports.updateProduct = updateProduct;
