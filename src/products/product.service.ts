import { Product } from './product.model';

export const products: Product[] = [];

export const createProduct = (dto: Product) => {
  products.push(dto);
};

export const calcStock = (): number => {
  let total = 0;
  products.forEach((item) => {
    total += item.stock;
  });

  return total;
};
