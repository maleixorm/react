let primeiros = [1,2,3];
console.log(primeiros);
let numeros = [...primeiros,4,5,6];
console.log(numeros);
let numeros2 = [primeiros,4,5,6];
console.log(numeros2);

let pessoa = {
    nome: "Matheus",
    idade: 45,
    cargo: "Programador"
};

console.log(pessoa);

let novaPessoa = {
    ...pessoa,
    anoAtual: 2025,
    cidade: "Campo Grande"
};

console.log(novaPessoa);