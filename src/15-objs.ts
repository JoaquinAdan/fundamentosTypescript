(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };

  const products: Product[] = [];

  const addProduct = (dto: Product) => {
    products.push(dto);
  };

  // addProduct({
  //   title: 'Pro1',
  //   createdAt: new Date(1993, 1, 1),
  //   stock: 12,
  //   size: 'M',
  // });
  // addProduct({
  //   title: 'Pro1',
  //   createdAt: new Date(1993, 1, 1),
  //   stock: 12,
  // });
  // console.log(products);

  products.push({
    title: 'Pro1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
    size: 'M',
  });
})();
