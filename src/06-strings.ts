(() => {
  let productTitle = 'My amazing product';
  // productTitle = null;
  // productTitle = () => {};
  // productTitle = 123;
  productTitle = 'My awesome product changed';
  // console.log('productTitle', productTitle);

  const productDescription = 'bla bla bla bla bla sasaas';
  // console.log('productDescription', productDescription);

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
  title: ${productTitle},
  description: ${productDescription},
  price: ${productPrice},
  isNew: ${isNew}
  `;
  console.log(summary);

  const myString: String = "chau"; // no tiene que ver con el conjunto de string, si no que con el objeto de string, recomendacion y buena practica utilizar el string en minuscula para el tipado como abajo
  const myStringGood: string = "hola";
})();
