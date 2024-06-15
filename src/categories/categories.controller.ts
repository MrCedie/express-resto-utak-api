import { Request, Response } from "express";
import * as CategoriesService from "./categories.service";

export const getCategories = async (_: Request, res: Response) => {
  try {
    const products = await CategoriesService.getCategories();
    if (!products) {
      res.status(200).send([]);
    } else {
      res.status(200).send(products);
    }
  } catch (error) {
    res.status(400).send(`Error fetching item: ${error}`);
  }
};
