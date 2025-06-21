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

document.getElementById('menu').innerHTML = (`
        <br>Escolha seu pedido:<br>
        <br>0 - Sorvete<br>
        <br>1 - Suco<br>
        <br>2 - Refrigerante<br>
        <br>3 - Agua com Gás<br>
`);

function pedir() {
    x = prompt("O que deseja pedir? ");

    switch (x) {
        case "0":
            alert('Você pediu Sorvete');
            break;
        case "1":
            alert('Você pediu Suco');
            break;
        case "2":
            alert('Você pediu Coca-Cola');
            break;
        case "3":
            alert('Você pediu Água São Lourenço');
            break;
        default:
            alert('Ops! Não temos essa opção!');
    }
}