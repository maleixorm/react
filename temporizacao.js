let i = 10;
function acao() {
    console.log(i)
    i--;
}

let timer = setInterval(acao, 1000);

function pararIntervalo() {
    clearInterval(timer);
    console.log('Fim');
}

setTimeout(pararIntervalo, 11000);