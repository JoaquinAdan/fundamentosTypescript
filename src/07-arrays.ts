(() => {
  let prices = [1, 21, 21, 21, 121, 2, 'hola', true]; //array de numeros
  // prices.push('asdas');
  // prices.push(true);
  // prices.push({});
  prices.push(12);
  prices = [3, 4, 5];

  let products = ['hola', true];
  products.push(false);

  let mixed: (string | number | boolean | Object)[] = [];
  mixed.push(12)
  mixed.push('as')
  mixed.push(true)
  mixed.push({})
  mixed.push([])

  let numbers = [1, 2, 3, 4, 5];
  numbers.map(item => console.log(item * 2))
})();
