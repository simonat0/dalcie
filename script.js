const timer = document.querySelector("#timer");

const updateTime = () => {
    const dataEspecifica = new Date("2024-11-16T00:00:00");
    const agora = new Date();
    const diferencaMs = agora - dataEspecifica;

    const segundos = Math.floor(diferencaMs / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    const result = `
    ${dias} dias,
    ${horas % 24} horas,
    ${minutos % 60} minutos e
    ${segundos % 60} segundos`;
    
    timer.textContent = result;
}

setInterval(() => updateTime(), 1000);
updateTime();