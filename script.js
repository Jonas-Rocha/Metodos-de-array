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

/*
O método filter() cria um novo array com todos os elementos que passaram na condição.
*/

const words = ["Javascript", "HTML", "CSS", "Web"];

const result = words.filter((word) => word.length > 3);
console.log(result);

const products1 = [
  { description: "Teclado", price: 150, promotion: true },
  { description: "Mouse", price: 70, promotion: false },
  { description: "Monitor", price: 1200, promotion: true },
];

// Exemplo de um filtro de produtos na promoção.
const promotion = products1.filter((item) => item.promotion === true);
/*
O filter é bom para quando queremos percorrer um array ou objeto
e retornar com um novo array filtrado.
*/

console.log(promotion);
