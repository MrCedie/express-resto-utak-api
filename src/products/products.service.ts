import { CreateProduct } from "./interfaces/createProduct.interface";
import db from "../_shared/config/firebaseConfig";
import { v4 as uuidv4 } from "uuid";
import { Product } from "./interfaces/product.interface";

export const getProducts = async () => {
  const snapshot = await db.ref("product").once("value");
  const products: Product[] = [];

  snapshot.forEach((childSnapshot) => {
    const product = childSnapshot.val();
    product.id = childSnapshot.key;
    products.push(product);
  });
  return products;
};

export const getProductsById = async (id: string) => {
  const snapshot = await db.ref("product").child(id).once("value");
  if (!snapshot.exists()) return null;
  return {
    id,
    ...snapshot.val(),
  };
};

export const addProduct = async (formData: CreateProduct) => {
  const id = uuidv4();
  await db
    .ref("product")
    .child(id)
    .set({
      ...formData,
      id,
    });
  const snapshot = await getProductsById(id);
  return snapshot;
};

export const removeProduct = async (id: string) => {
  const product = await getProductsById(id);
  if (!product) return null;
  await db.ref("product").child(id).remove();
  return { id };
};

export const updateProduct = async (id: string, formData: CreateProduct) => {
  const product = await getProductsById(id);
  if (!product) return null;
  await db.ref("product").child(id).update(formData);
  const snapshot = await getProductsById(id);
  return snapshot;
};
