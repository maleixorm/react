// Este é meu nome

/*
Este
é
meu
nome
*/

function nome() {
    return document.getElementById('area').innerHTML = 'Bem vindo ' + prompt('Qual o seu nome? ');
}

function idade() {
    let idade = prompt('Digite sua idade: ');
    return idade;
}

function entrar() {
    let area = document.getElementById('area');
    let texto = prompt('Digite seu nome: ');

    if (texto == '' || texto == null) {
        alert('Digite seu nome novamente!');
        area.innerHTML = 'Bem vindo ...';
    } else {
        area.innerHTML = 'Bem vindo ' + texto;
    }
}

function entrarNovamente(nome, idade) {
    let area = document.getElementById('nova_area');
    let texto = prompt('Digite seu sobrenome: ');
    area.innerHTML = nome + ' ' + texto + ' - ' + idade + ' anos.';
}