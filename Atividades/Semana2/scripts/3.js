function verificarPalindromo() {
    const texto = document.getElementById('texto').value;

    const textoLimpo = texto.toLowerCase().replace(/[\W_]/g, '');

    let inicio = 0;
    let fim = textoLimpo.length - 1;
    let ehPalindromo = true;

    while (inicio < fim) {
        if (textoLimpo[inicio] !== textoLimpo[fim]) {
            Palindromo = false;
            break;
        }
        inicio++;
        fim--;
    }

    if (Palindromo) {
        alert('É um palíndromo!');
    } else {
        alert('Não é um palíndromo.');
    }
}
