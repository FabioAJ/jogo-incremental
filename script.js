var pontos = 0;
var crono = 0;

function aumentoDePontos() {
    if (pontos == 0) {
        setInterval(cronometro, 1000);
    }
    pontos += 1;
    document.getElementById("demo").innerHTML = "Pontos: " + pontos;
    
}

function cronometro() {
    crono += 1;
    document.getElementById("cronom").innerHTML = "Tempo: " + crono;
}

function scrollWin() {
    window.scrollTo(0, 500);
}
