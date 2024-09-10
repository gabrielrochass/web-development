// variáveis e tipos
var x = 10; // escopo de função -> visiível em todo o código
let y = 20; // escopo de bloco -> visível apenas no bloco em que foi delcarada (como um if else)
const z = 30; // valor que não pode ser alterado

let age = 21; // number
let name = "Gabriel"; // string
let isMarried = false; // booleano
let nothing; // undefined
let empty = null; // null
let person = {
    nome: "Gabriel",
    idade: 21
} // object: versátil e engoloba array e struct, por exemplo -> objetos com propriedades, coleção de pares chave-valor
let colors = ["red", "green"]; // array (object)
let simbolo1 = Symbol('id'); // decalra valores únicos -> podem ser usados para identificação
let simbolo2 = Symbol('id');
let bigNumber = 123456789012345678901234567890n; // bigint: n > 2^53 - 1 (9.007.199.254.740.991) -> usa quase nunca

console.log(typeof age); // printa o tipo de uma variável
console.log(typeof nothing) // variável não foi definida anteriormente
console.log(empty); // valor intencionalmente vazio. retorna object por um erro no primeiro design da função typeof
console.log(typeof person) // coleção de dados (object)
console.log(person) // { nome: 'Gabriel', idade: 21 }
console.log(person.nome) // Gabriel
console.log(typeof colors) // object
console.log(colors)
console.log(colors[0])
console.log(typeof simbolo1) // symbol
console.log(simbolo1) // symbol('id')
console.log(simbolo1 == simbolo2) // false
console.log(typeof bigNumber) // bigInt


// var pode ser redeclarado no mesmo escopo, let não!
// preferencialmente, usar let!!

// operadores: aritmético, comparativo e lógico

// estruturas de controle: if, else e switch

// loops: for, while e do-while

// coleções

// funções

// recursão
