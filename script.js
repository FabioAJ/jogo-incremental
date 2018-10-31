var pontos = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
var melhorias = [false, false, false];

function inicio(){
    setInterval(verificacao, 100);
}

function aumentoDePontos() {
    if (pontos == 0) {
        setInterval(cronometro, 1000);
    }
    pontos += 50;
    document.getElementById("demo").innerHTML = "Pontos: " + pontos;
    document.getElementById("imgPersonagem").src = "img\\gatopersonagem2.png";
    setTimeout(function(){
        document.getElementById("imgPersonagem").src = "img\\gatopersonagem.png";
    }, 1500);
}

function cronometro() {
    segundos += 1;

    if(segundos >= 60){
        segundos = 0;
        minutos += 1;
    }

    if (minutos >= 60){
        minutos = 0;
        horas += 1;
    }
    document.getElementById("cronom").innerHTML = horas + ":" + minutos + ":" + segundos;
}

function melhoria1(){
    pontos += 1;
    document.getElementById("demo").innerHTML = "Pontos: " + pontos;
}
function melhoria2(){
    pontos += 1;
    document.getElementById("demo").innerHTML = "Pontos: " + pontos;
}
function melhoria3(){
    pontos += 5;
    document.getElementById("demo").innerHTML = "Pontos: " + pontos;
}
function verificacao(){
    if ((pontos >= 20) && (melhorias[0] === false)){
            document.getElementById("imgGatos1").src = "img\\gato1.png";
            melhorias[0] = true;
            setInterval(melhoria1, 20000);
    }
    if ((pontos >= 250) && (melhorias[1] === false)){
            document.getElementById("imgGatos2").src = "img\\gato2.png";
            melhorias[1] = true;
            setInterval(melhoria2, 1000);
    }
    if ((pontos >= 500) && (melhorias[2] === false)){
            document.getElementById("imgGatos3").src = "img\\gato3.png";
            melhorias[2] = true;
            setInterval(melhoria3, 10000);
    }
}
