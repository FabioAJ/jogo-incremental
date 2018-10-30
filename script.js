var pontos = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
var melhorias = [false, false, false];

function aumentoDePontos() {
    if (pontos == 0) {
        setInterval(cronometro, 1000);
    }
    pontos += 1;
    document.getElementById("demo").innerHTML = "Pontos: " + pontos;

}

function cronometro() {
    segundos += 1;
    console.log(segundos);

    if(segundos >= 60){
        segundos = 0;
        minutos += 1;
    }

    if (minutos >= 60){
        minutos = 0;
        horas += 1;
    }
    document.getElementById("cronom").innerHTML = "Tempo:" + horas + "-" + minutos + "-" + segundos;
}

function melhoria1(){
    pontos += 1;
    document.getElementById("demo").innerHTML = "Pontos: " + pontos;
}

/*function verificacao(){
    if (pontos >= 20 && melhorias[0] === false){
            melhorias[0] = true;
            setInterval(melhoria1, 20000);
    }
}*/
