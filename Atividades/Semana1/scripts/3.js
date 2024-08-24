function calcularFatorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

let numero = parseInt(prompt("Digite um número inteiro positivo:"), 10);

if (isNaN(numero) || numero <= 0) {
    alert("Por gentileza, insira um número inteiro positivo.");
} else {
    let fatorial = calcularFatorial(numero);
    alert("O fatorial de " + numero + " é " + fatorial + ".");
}