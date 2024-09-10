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
// for
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while
console.log('\n')
let count = 4;
while (count != 0) {
    console.log(count);
    count--;
}

// do-while
console.log('\n')
let i = 0;
do {
  console.log(i); // 0 -> executa uma vez antes de verificar 
  i++;
} while (i < 5 && (i != 0));

// for of
for (const color of colors) { // for i in em python
    console.log(color)
}

// break -> encerra o loop
// continue -> vai pra próxima iteração do loop

// coleções: array, object, set, map
// array: coleção ordenada de valores com índices -> funciona como lista em python ou uma stack (pilha)
let fruits = ['apple', 'orange', 'grapes', 'pinapple', 'banana']
console.log(fruits[0]); // apple -> acessar elementos

fruits.push('mango'); // add elemento no fim da lista
console.log(fruits)

fruits.pop();
console.log(fruits) // remove o último elemento da lista

fruits.shift();
console.log(fruits) // remove o primeiro elemento da lista

fruits.unshift('potato')
console.log(fruits) // adiciona no inicio da lista

let newFruits = fruits.map(letter => letter = 'apple')
console.log(newFruits)

let myFruits = fruits.filter(letter => (letter[0] == 'o') || (letter[0] == 'g'))
console.log(myFruits) 

// object: coleção de pares chave-valor
console.log(person.nome) // Gabriel
console.log(person['idade']) // console.log(person.idade) -> 21
person.city = 'Recife' // adicionar propriedade
console.log(person) // { nome: 'Gabriel', idade: 21, city: 'Recife' }
person.idade = 22 // alterar propriedade
console.log(person.idade) // 22

// set: coleção de valores únicos
let unique = [1,1,1,2,2,3,4,4,4,4,5,5,6]
console.log(new Set(unique)) // Set(6) { 1, 2, 3, 4, 5, 6 } -> retira as repetições
unique = new Set(unique)

unique.add(7)
console.log(unique) // Set(7) { 1, 2, 3, 4, 5, 6, 7 }
unique.add(6) // não muda nada oq já tem 6 no set
console.log(unique)

console.log(unique.has(3)) // true

unique.delete(2)
console.log(unique) // Set(6) { 1, 3, 4, 5, 6, 7 }


// map: coleção de pares chave-valor com chaves de qualquer tipo -> mapeia qualquer coisa com qualquer coisa
let map = new Map()
map.set('nome', 'Daniel')
map.set(1, 'one')
console.log(map) // Map(2) { 'nome' => 'Daniel', 1 => 'one' }

console.log(map.get('nome')) // Daniel

map.delete(1)
console.log(map) // Map(1) { 'nome' => 'Daniel' }



// funções: blocos de código reutilizáveis

// declarativas
function multiplicaPor5(num) {
    return num * 5
}
console.log(multiplicaPor5(10)) // 50

// arrow function (mais popular)
const greet = (name) =>  `hello, ${name}!`
console.log(greet("Gabriel")) 

const people = [
    { name: "José", age: 35 },
    { name: "Maria", age: 28 },
    { name: "João", age: 40 },
    { name: "Ana", age: 25 }
  ];
  
  const getAdultsSortedByName = (persons) => 
    persons
      .filter(person => person.age > 30) // Filtra pessoas com mais de 30 anos
      .map(person => person.name)        // Mapeia para um array com os nomes
      .sort();                           // Ordena os nomes em ordem alfabética
  
  console.log(getAdultsSortedByName(people)); 
  // ["João", "José"]
  

// assíncrona
// async function fetchData() {
//     let response = await fetch('https://api.example.com/data');
//     let data = await response.json();
//     console.log(data);
//   }
  
//   fetchData();
  

// recursão: técnica em que uma função se chama repetidamente até atingir uma condição de parada
// funciona bem quando uma função se repete várias vezes
// estrutura: condição de parada (caso base) e chamada recursiva (subproblema)

// fatorial:
const factorial = (n) => {
    if (n == 0) {
        return 1
    }
    return n * factorial(n-1)
}

console.log(factorial(5)) // 120

// input: prompt, confirm
// prompt -> só funciona em ambiente de navegação web
const username = prompt('digite seu user: ')
console.log(`seu username é ${username}`)

// confirm -> tb só funciona na web
// let resultado = confirm(mensagem);
let resposta = confirm("Você tem certeza que quer deletar?");
if (resposta) {
  console.log("Item deletado.");
} else {
  console.log("Ação cancelada.");
}

// readline -> terminal
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite seu nome: ', (name) => {
  console.log(`Olá, ${name}!`);
  rl.close(); // Fecha a interface
});

// output: console.log, alert, document.write

// console.log -> imprime no terminal 
console.log('olá')

// alert -> mostra em um popup na web (ruim pra test no cypress)
alert("Bem-vindo ao site!"); // aparece com uma mensagem de ok para apagar o popup

// document.write -> insere conteúdo diretamente no documento html enquanto a página está sendo carregada (lemebrar de usar antes do carregamento da página)
document.write("<h1>Bem-vindo à minha página! Já iremos mostrar nosso conteúdo!</h1>");
