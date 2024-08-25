function Relogio() {
    setInterval(() => {
        const agora = new Date(); 
        const horas = String(agora.getHours()).padStart(2, '0');
        const minutos = String(agora.getMinutes()).padStart(2, '0'); 
        const segundos = String(agora.getSeconds()).padStart(2, '0'); 

        const horarioFormatado = `${horas}:${minutos}:${segundos}`; 

        document.getElementById('relogio').textContent = horarioFormatado; 
    }, 1000); 
}
Relogio();

