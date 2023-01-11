(() => {
  let isEnable = true;
  // isEnable = 'as'
  // isEnable = 12
  isEnable = false;

  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);

  const random = Math.random();
  console.log('random', random);
  isNew = random >= 0.5 ? true : false;
  console.log('isNew', isNew);

  const myBoolean: Boolean = true; // no tiene que ver con el conjunto de bool, si no que con el objeto de bool, recomendacion y buena practica utilizar el boolean en minuscula para el tipado como abajo
  const myBooleanGood: boolean = true;
})();
