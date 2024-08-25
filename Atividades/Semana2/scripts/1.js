function exibirDataAtual() {
    const agora = new Date();

    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const mesesAno = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    const diaSemana = diasSemana[agora.getDay()];
    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = mesesAno[agora.getMonth()];
    const ano = agora.getFullYear();

    const dataFormatada = `${diaSemana}, ${dia} de ${mes} de ${ano}`;
    document.getElementById('dataAtual').textContent = dataFormatada;
}

exibirDataAtual();