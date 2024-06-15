import { Router } from "express";
import * as productController from "./products.controller";
import { createProductSchema } from "./validations/createProduct.validation";
import { validate } from "../_shared/middlewares/validationError.validation";
import { udpateProductSchema } from "./validations/updateProduct.validation";

const router = Router();

router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);
router.post("/", validate(createProductSchema), productController.createProduct);
router.patch("/:id", validate(udpateProductSchema), productController.updateProduct);
router.put("/:id", validate(udpateProductSchema), productController.updateProduct);
router.delete("/:id", productController.removeProduct);

export default router;
