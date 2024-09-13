function alternarCampos() {
    var camposDiv = document.getElementById('campos_especificos');
    camposDiv.innerHTML = "";

    var tipoUsuario = document.querySelector('input[name="tipo_usuario"]:checked').value;

    if (tipoUsuario === "Aluno") {
        var cursoLabel = document.createElement('label');
        cursoLabel.setAttribute('for', 'curso');
        cursoLabel.textContent = 'Curso:';

        var cursoInput = document.createElement('input');
        cursoInput.setAttribute('type', 'text');
        cursoInput.setAttribute('id', 'curso');
        cursoInput.setAttribute('name', 'curso');
        cursoInput.setAttribute('placeholder', 'Digite seu curso');
        cursoInput.setAttribute('onblur', "validarCampo('curso')");

        var matriculaLabel = document.createElement('label');
        matriculaLabel.setAttribute('for', 'matricula');
        matriculaLabel.textContent = 'Matrícula:';

        var matriculaInput = document.createElement('input');
        matriculaInput.setAttribute('type', 'text');
        matriculaInput.setAttribute('id', 'matricula');
        matriculaInput.setAttribute('name', 'matricula');
        matriculaInput.setAttribute('placeholder', 'Digite sua matrícula');
        matriculaInput.setAttribute('onblur', "validarCampo('matricula')");

        camposDiv.appendChild(cursoLabel);
        camposDiv.appendChild(cursoInput);
        camposDiv.appendChild(matriculaLabel);
        camposDiv.appendChild(matriculaInput);
    } else if (tipoUsuario === "Professor") {
        var areaLabel = document.createElement('label');
        areaLabel.setAttribute('for', 'area');
        areaLabel.textContent = 'Área:';

        var areaInput = document.createElement('input');
        areaInput.setAttribute('type', 'text');
        areaInput.setAttribute('id', 'area');
        areaInput.setAttribute('name', 'area');
        areaInput.setAttribute('placeholder', 'Digite sua área de atuação');
        areaInput.setAttribute('onblur', "validarCampo('area')"); 

        var lattesLabel = document.createElement('label');
        lattesLabel.setAttribute('for', 'lattes');
        lattesLabel.textContent = 'Lattes:';

        var lattesInput = document.createElement('input');
        lattesInput.setAttribute('type', 'text');
        lattesInput.setAttribute('id', 'lattes');
        lattesInput.setAttribute('name', 'lattes');
        lattesInput.setAttribute('placeholder', 'Digite seu link Lattes');
        lattesInput.setAttribute('onblur', "validarCampo('lattes')");

        var matriculaLabel = document.createElement('label');
        matriculaLabel.setAttribute('for', 'matricula');
        matriculaLabel.textContent = 'Matrícula:';

        var matriculaInput = document.createElement('input');
        matriculaInput.setAttribute('type', 'text');
        matriculaInput.setAttribute('id', 'matricula');
        matriculaInput.setAttribute('name', 'matricula');
        matriculaInput.setAttribute('placeholder', 'Digite sua matrícula');
        matriculaInput.setAttribute('onblur', "validarCampo('matricula')");

        camposDiv.appendChild(areaLabel);
        camposDiv.appendChild(areaInput);
        camposDiv.appendChild(lattesLabel);
        camposDiv.appendChild(lattesInput);
        camposDiv.appendChild(matriculaLabel);
        camposDiv.appendChild(matriculaInput);
    }
}

function validarCampo(id) {
    var campo = document.getElementById(id);
    var valor = campo.value.trim();
    var erroDiv = document.getElementById(id + "_erro");

    if (valor === "") {
        erroDiv.textContent = "Este campo é obrigatório.";
        erroDiv.style.color = "red";
        return false;
    } else {
        erroDiv.textContent = "";
        return true;
    }
}

function validarFormulario() {
    var nomeValido = validarCampo('nome');
    var emailValido = validarCampo('email');
    var dataNascimentoValido = validarCampo('data_nascimento');

    var tipoUsuario = document.querySelector('input[name="tipo_usuario"]:checked').value;
    var camposExtrasValidos = true;

    if (tipoUsuario === "Aluno") {
        camposExtrasValidos = validarCampo('curso') && validarCampo('matricula');
    } else if (tipoUsuario === "Professor") {
        camposExtrasValidos = validarCampo('area') && validarCampo('lattes') && validarCampo('matricula');
    }

    return nomeValido && emailValido && dataNascimentoValido && camposExtrasValidos;
}


window.onload = function() {
    alternarCampos();
};
