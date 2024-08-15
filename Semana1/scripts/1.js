let entrada = prompt("Digite um número positivo:");
let numero = parseInt(entrada);
if (!isNaN(numero) && numero > 0) {
    if (numero % 2 === 0) {
        alert("Este número é par!");
    } else {
        alert("Este número é ímpar!");
    }
} else {
    alert("Valor inválido! Por gentileza, digite um número positivo.");
}
