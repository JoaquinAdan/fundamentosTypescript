import { createProduct, calcStock, products } from './product.service';

createProduct({
  name: 'Pro1',
  createdAt: new Date(1993, 1, 1),
  stock: 3,
  size: 'M',
});
createProduct({
  name: 'Pro2',
  createdAt: new Date(1993, 2, 1),
  stock: 12,
});

console.log(products);
const total = calcStock();
console.log(total);
