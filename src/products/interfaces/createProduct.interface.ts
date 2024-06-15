export interface CreateProduct {
  category: string;
  name: string;
  price: number;
  cost: number;
  stock: number;
  options: CreateProductOption[];
}

interface CreateProductOption {
  name: string;
  price: number;
}
