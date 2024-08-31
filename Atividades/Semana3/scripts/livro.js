var livros = [];

function adicionarLivro() {
    var nomeLivro = document.getElementById('nomeLivro').value;
    
    if (nomeLivro !== "") {
        livros[livros.length] = nomeLivro; 
        livros.sort();
        atualizarLista(); 
    }

    document.getElementById('nomeLivro').value = "";
}

function atualizarLista() {
    var listaLivros = document.getElementById('listaLivros');
    listaLivros.innerHTML = ''; 

    for (var i = 0; i < livros.length; i++) {
        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(livros[i]));
        listaLivros.appendChild(li);
    }
}

document.getElementById('livroForm').onsubmit = function() {
    adicionarLivro();
    return false; 
}
