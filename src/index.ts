import express from "express";
import bodyParser from "body-parser";
import productRoutes from "./products/products.router";
import categoriesRoutes from "./categories/categories.routes";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/product", productRoutes);
app.use("/categories", categoriesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
