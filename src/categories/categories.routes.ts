import { Router } from "express";

import * as categoryController from "./categories.controller";

const router = Router();

router.get("/", categoryController.getCategories);

export default router;
