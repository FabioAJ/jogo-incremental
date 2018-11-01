var pontos = 0;
var segundos = 50;
var minutos = 0;
var melhorias = [false, false, false];

function inicio(){
    setInterval(verificacao, 100);
}

function aumentoDePontos() {
    if (pontos == 0) {
        setInterval(cronometro, 1000);
    }
    pontos += 1;
    console.log(pontos);
    document.getElementById("demo").innerHTML = "Pontos: " + pontos;
    document.getElementById("imgPersonagem").src = "img\\gatopersonagem2.png";
    setTimeout(function(){
        document.getElementById("imgPersonagem").src = "img\\gatopersonagem.png";
    }, 200);
    var s = document.getElementById("fabio");
    s.play(); 
}

function cronometro() {
   segundos += 1;

   if(segundos >= 60){
       segundos = 0;
       minutos += 1;
   }

   if (minutos >= 60){
       minutos = 0;
       segundos = 0;
   }
   if (segundos < 10 && minutos < 10) {
       document.getElementById("cronom").innerHTML = "0" + minutos + ":" + "0" + segundos;
   } else if (segundos < 10 && minutos >= 10) {
       document.getElementById("cronom").innerHTML = minutos + ":" + "0" + segundos;
   } else if (segundos >= 10 && minutos < 10) {
       document.getElementById("cronom").innerHTML = "0" + minutos + ":" + segundos;
   } else {
       document.getElementById("cronom").innerHTML = minutos + ":" + segundos;
   }
}

function melhoria1(){
    pontos += 1;
    document.getElementById("demo").innerHTML = "Pontos: " + pontos;
    console.log(pontos);
}

function melhoria3(){
    pontos += 5;
    document.getElementById("demo").innerHTML = "Pontos: " + pontos;
    console.log(pontos);
}

function verificacao(){
    if ((pontos >= 20) && (melhorias[0] === false)){
            document.getElementById("imgGatos1").src = "img\\gato1.png";
            melhorias[0] = true;
            setInterval(melhoria1, 20000);
    }
    if ((pontos >= 50) && (melhorias[1] === false)){
            document.getElementById("imgGatos2").src = "img\\gato2.png";
            melhorias[1] = true;
            setInterval(melhoria1, 1000);
    }
    if ((pontos >= 70) && (melhorias[2] === false)){
            document.getElementById("imgGatos3").src = "img\\gato3.png";
            melhorias[2] = true;
            setInterval(melhoria3, 10000);
    }
}
