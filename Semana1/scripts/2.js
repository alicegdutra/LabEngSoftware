let numero = prompt("Insira um número inteiro positivo:");
numero = parseInt(numero);

function numeroprimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= numero / 2; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

if (!isNaN(numero) && numero > 0) {
    if (numeroprimo(numero)) {
        alert("O número " + numero + " é primo.");
    } else {
        alert("O número " + numero + " não é primo.");
    }
} else {
    alert("Valor inválido, por gentileza, insira um número inteiro positivo.");
}
