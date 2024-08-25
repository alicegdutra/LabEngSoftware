function verificarPalindromo() {
    const texto = document.getElementById('texto').value;

    const textoLimpo = texto.toLowerCase().replace(/[\W_]/g, '');

    const pilha = [];
    for (let i = 0; i < textoLimpo.length; i++) {
        pilha.push(textoLimpo[i]);
    }

    let ehPalindromo = true;
    for (let i = 0; i < textoLimpo.length; i++) {
        if (textoLimpo[i] !== pilha.pop()) {
            Palindromo = false;
            break;
        }
    }

    if (Palindromo) {
        alert('É um palíndromo!');
    } else {
        alert('Não é um palíndromo.');
    }
}
verificarPalindromo();