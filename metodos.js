// Método includes
let nomes = ['Mateus', 'Marcos', 'Lucas', 'João'];

console.log(nomes.includes('Lucas'));

if (nomes.includes('Mateus')) {
    console.log('Mateus está na lista');
} else {
    console.log('Mateus não está na lista');
}

// Métodos endsWith e startsWith

let nome = 'Marcos';

console.log(nome.endsWith('s'));
console.log(nome.startsWith('M'));

// Some

console.log(nomes.some(nome => nome === 'Maria'));

// Every

let nomes2 = [
    { nome: 'Matheus', idade: 18 },
    { nome: 'Maria', idade: 25 },
    { nome: 'Henrique', idade: 15 }
];

console.log(nomes2);

console.log(nomes2.every(nome => nome.idade >= 18));