import { Request, Response } from "express";
import * as productsService from "./products.service";
import { validationResult } from "express-validator";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productsService.getProducts();
    if (!products) {
      res.status(200).send([]);
    } else {
      res.status(200).send(products);
    }
  } catch (error) {
    res.status(400).send(`Error fetching item: ${error}`);
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await productsService.getProductsById(req.params.id);
    if (!product) {
      res.status(404).send("product not found");
    } else {
      res.status(200).send(product);
    }
  } catch (error) {
    res.status(400).send(`Error fetching item: ${error}`);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const product = await productsService.addProduct(req.body);
    if (!product) {
      res.status(400).send("bad request");
    } else {
      res.status(201).send(product);
    }
  } catch (error) {
    res.status(400).send(`Error fetching item: ${error}`);
  }
};

export const removeProduct = async (req: Request, res: Response) => {
  try {
    const product = await productsService.removeProduct(req.params.id);
    if (!product) {
      res.status(404).send({ error: "product not found" });
      return;
    } else {
      res.status(200).send(product);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(`Error fetching item: ${error}`);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const product = await productsService.updateProduct(
      req.params.id,
      req.body
    );
    if (!product) {
      res.status(404).send({ error: "Product not found" });
      return;
    } else {
      res.status(200).send(product);
    }
  } catch (error) {
    res.status(400).send(`Error fetching item: ${error}`);
  }
};
