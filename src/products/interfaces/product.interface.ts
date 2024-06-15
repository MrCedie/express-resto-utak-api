export interface Product {
  id?: string;
  category: string;
  name: string;
  price: number;
  cost: number;
  stock: number;
  options: ProductOption[];
}

export interface ProductOption {
  name: string;
  price: number;
}
