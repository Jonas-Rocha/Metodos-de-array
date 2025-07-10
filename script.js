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

/*
O método findIndex() retorna o indice no array do primeiro elemento
que satisfizer a condição. Caso contrário, retorna -1, indicando
que nunhum elemento passou no teste.
*/

const values = [4, 6, 8, 12];

//Obtendo a posição do index e o elemento que o valor é maior do que 4.
//console.log(values.findIndex((value) => value > 4));

//EXEMPLO 2:

const index = values.findIndex((value) => value > 4);
console.log(index);
console.log(values[index]);

// Exemplo de quando não encontra.
console.log(values.findIndex((value) => value > 12));

/*
O método find() retorna o valor do primeiro elemento array que satisfazer
a condição. Caso contrário, undefined é retornado.
*/

const values1 = [5, 12, 8, 130, 44];

// Retorna o primeiro elemento que valor é maior que 10
const found = values1.find((value) => value > 10);
console.log(found);

// Exemplo com objetos.
const fruits = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 25 },
  { name: "laranja", quantity: 64 },
];

const result1 = fruits.find((fruit) => fruit.name === "bananas");

console.log(result1);

/*
O método every() testa se todos os elementos do array passam na
condição e retorna um valor Boolean.
*/

// Exemplo de array de idades.
const ages = [15, 30, 39, 29];

// Verificando se todas as idades são maiores ou igual a 18.
const result2 = ages.every((age) => age >= 18);
console.log(result2);

/*
O método some() testa se ao menos um dos elementos no array
passa na condição e retorna um valor true ou false.
*/

// Exemplo de array de idades
const ages1 = [15, 30, 39, 29];

const result3 = ages.some((age) => age < 18);
console.log(result3);

/*
O método reduce() é utilizado para reduzir um array a um único
valor.

Parâmetros:
- Array original (values)
- Acumulador (accumulator)
- Valor da iteração (currentValue)
- Valor Inicial (0)
- Index (index da iteração atual - opcional)
*/

const values2 = [1, 2, 3, 4, 5];

const sum = values2.reduce((accumulator, currentValue, index) => {
  console.log("ACUMULADOR", accumulator);
  console.log("CURRENT VALUE", currentValue);
  console.log("INDEX", index);

  console.log("SOMA", accumulator + currentValue);
  console.log("###########");
  return accumulator + currentValue; // precisamos obrigatoriamente do return, pois é o return que coloca o valor no accumulator.
}, 10); // aqui era 0 para testar

console.log("RESULTADO DA SOMA FINAL:", sum); // se eu colocar trocar o valor inicial de 0 para 10, ele acrescenta 10 no resultado final.
//
