(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  myDynamicVar = 'hello';
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta)

  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2)
})();
// Se aconseja no utilizar any salvo que sea en desarrollo
