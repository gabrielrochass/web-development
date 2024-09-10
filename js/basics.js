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
// aritmético
let number = 1;
number++; // 2
number += 3; // 5
number -= 1; // 4
number = number % 3; // 1
number *= 10; // 10
number /= 2; // 5

// comparativo
console.log(5 == "5"); // true -> == compara valor, n tipo
console.log(5 === "5"); // false -> === compara estritivamente tudo
console.log(5 != 5); // false
console.log(5 > 9); // false
console.log(6 < 9); // true

// lógico -> mostrar tabela verdade
console.log((5 > 2 && 4 < 7)) // true TT  
console.log((5 > 2 && 4 > 7)) // false TF / FT
console.log((5 < 2 && 4 > 7)) // fase FF 

console.log((5 > 2 || 4 < 7)) // true TT
console.log((5 < 2 || 4 < 7)) // true FT TF
console.log((5 < 2 || 4 > 7)) // false FF

let isTrue = !(5 < 2) // true
console.log(isTrue)


// estruturas de controle: if, else e switch
if (age >= 18) {
    console.log('já que vc possui a idade ' + age + ' anos. Então, vc pode votar')
} else if (age <= 10) {
    console.log('vá estudar')
} else {
    console.log('quase lá!')
}

let day = 'terça';

switch (day) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 'terça':
    console.log("Terça-feira");
    break;
  default:
    console.log("Dia inválido");
}


// loops: for, while e do-while
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log('\n')
let count = 4;
while (count != 0) {
    console.log(count);
    count--;
}

console.log('\n')
let i = 0;
do {
  console.log(i); // 0 -> executa uma vez antes de verificar 
  i++;
} while (i < 5 && (i != 0));

// coleções

// funções

// recursão
