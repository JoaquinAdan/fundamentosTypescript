(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 27;
  // customerAge = customerAge + '1' // 281
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  let productInStock: number;
  console.log('productInStock', productInStock);
  if (productInStock > 10) {
    console.log('is greater');
  }

  // let discount = parseInt('adsasd') // not apply
  let discount = parseInt('100')
  console.log('discount', discount);
  if (discount <= 200) {
    console.log('apply')
  } else {
    console.log('not appply')
  }

  let hex = 0xfff;
  console.log('hex', hex);
  let bin = 0b1010; //10
  console.log('bin', bin);

  const myNumber: Number = 10; // no tiene que ver con el conjunto de numeros, si no que con el objeto de numeros, recomendacion y buena practica utilizar el number en minuscula para el tipado como abajo
  const myNumberGood: number = 10;
})();
