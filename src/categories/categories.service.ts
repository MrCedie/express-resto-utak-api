import db from "../_shared/config/firebaseConfig";
import { Category } from "./interfaces/category.interface";

export const getCategories = async () => {
  const snapshot = await db.ref("category").once("value");
  const categories: Category[] = [];

  snapshot.forEach((childSnapshot) => {
    const category = childSnapshot.val();
    category.id = childSnapshot.key; // Add the ID to each category
    categories.push(category);
  });
  return categories;
};
