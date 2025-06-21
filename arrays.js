lista = ["Matheus", "Marcos", "Lucas", "João", 15];
console.log(lista.indexOf("Marcos"));
console.log(lista.indexOf("Henrique"));
console.log(lista.join(", "));
console.log(lista.pop());
console.log(lista.shift());
console.log(lista);
console.log(lista.push("Mateus"));
console.log(lista);

if (lista.indexOf("Henrique") > -1) {
    console.log("Esse item está na lista.");
} else {
    console.log("Item não encontrado.");
}