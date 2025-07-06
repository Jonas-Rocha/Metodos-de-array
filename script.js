/*
O método map() chama a função callback recebida por parâmetro para cada elemento do Array original,
em ordem, e constrói um novo array com base nos retornos de cada chamada. E No final,
devolve o novo array.
*/

const products = ["teclado", "mouse", "monitor"];

// Percorrendo os items do Array
products.map((item) => {
  console.log(item);
});

// Sintaxe reduzida.
products.map((item) => console.log(item));

// Utilizando o novo objeto retornado.
const formated = products.map((item) => {
  //return item.toLocaleUpperCase();

  return {
    id: Math.random(),
    description: item,
  };
});

console.log(formated);
