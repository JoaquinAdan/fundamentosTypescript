(() => {
  const login = (dto: { email: string; password: number }) => {
    console.log(dto.email, dto.password);
  };

  // login('nico@nico.co', '12121221');
  login({ email: 'nico@nico.co', password: 12121221 });

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const products: any[] = [];

  const addProduct = (dto: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
    products.push(dto);
  };

  addProduct({
    title: 'Pro1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
    size: 'M',
  });
  addProduct({
    title: 'Pro1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
  });
  console.log(products)
})();
