function verificarDado() {
    let value = prompt("Informe um dado:");

    if (confirm("Deseja verificar o tipo do dado informado?")) {
        let lowerCaseValue = value.toLowerCase();

        if (lowerCaseValue === "true" || lowerCaseValue === "false") {
            document.write("<p>O tipo do seu dado é booleano.</p>");
        } else if (!isNaN(parseFloat(value)) && value !== "") {
            document.write("<p>O tipo do seu dado é um número.</p>");
        } else {
            document.write("<p>O tipo do seu dado é uma string.</p>");
        }
    } else {
        document.write("<p>Obrigada por visitar esta página!</p>");
    }
}

verificarDado();

