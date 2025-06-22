const pessoa = {
    nome: "Marcos",
    sobrenome: "Aleixo",
    idade: 37,
    cargo: "Desenvolvedor"
}

let { nome } = pessoa;
let { sobrenome } = pessoa;
let { idade, cargo } = pessoa;
let { cargo:programador } = pessoa;

console.log(`${nome} ${sobrenome} tem ${idade} anos e trabalha como ${cargo}.`);
console.log(pessoa);



let humano = ["João", "Silva", 52];

let { 1:segundonome } = humano;
let { 0:primeironome } = humano;
let { 2:suaidade } = humano;


console.log(`${primeironome} ${segundonome} tem ${suaidade} anos.`);
console.log(humano);