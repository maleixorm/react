function minhaLista(...nomes) {
    console.log(nomes);
}

function minhaListaDeNumeros(...numeros) {
    console.log(numeros);
}

minhaLista('Mateus', 'Marcos', 'Lucas', 'João', 'Atos');
minhaListaDeNumeros(1,2,3,4,5);

function cadastrar(usuarios, ...novosUsuarios) {
    let totalUsuarios = [...usuarios, ...novosUsuarios];
    console.log(totalUsuarios);
}

let usuarios = ['Matheus', 'Marcos'];

let novosUsuarios = cadastrar(usuarios, 'Lucas', 'João');