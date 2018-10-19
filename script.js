var pontos = 0;
var crono = 0;
var melhorias = [false, false, false];

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
    console.log(crono);
}

function scrollUpgrades() {
    window.scrollTo(0, 700);
}

function scrollBolaDeLa() {
    window.scrollTo(0, -700);
}

function melhoria1(){
    pontos += 1;
    document.getElementById("demo").innerHTML = "Pontos: " + pontos;
}

function melhoria2(){
    if (pontos >= 250 && melhorias[1] === false){

    }

}

function melhoria3(){
    if (pontos >= 500 && melhorias[2] === false){

    }

}

function verificacao(){
    if (pontos >= 20 && melhorias[0] === false){
            melhorias[0] = true;
            setInterval(melhoria1, 20000);
    }
}
