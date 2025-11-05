// -------------------------------------------------------------01
function raio(){
    var pi = 3.14
    var raio = parseFloat(prompt("informe o raio: "));
    var area =  pi * (raio * raio);
    var diametro = 2 * raio;

    document.getElementById("texto").innerHTML= "o valor da area é de: "   + area.toFixed(2);

    if(isNaN(raio)){
        document.getElementById("texto").innerHTML = "preencha todos os campos de acordo!";
    }

}
// -------------------------------------------------------------02
function verificacao(){

    var num = parseInt(prompt("informe um numero: "));

    if (num % 2 == 0) {
        document.getElementById("texto").innerHTML = "o numero é par";
    } else {
        document.getElementById("texto").innerHTML = "o numero é impar";
    }

    if(isNaN(num)){
        document.getElementById("texto").innerHTML = "preencha todos os campos de acordo!";
    }
}
// -------------------------------------------------------------03
function distancia(){
     var distancia = parseFloat(prompt("informe a distancia em km: "));
     var velocidade = parseFloat(prompt("informe a velocidade: "));
     var tempo = distancia / velocidade;

     document.getElementById("texto").innerHTML= "o tempo gasto é de: " + tempo.toFixed(2) + " horas";

     if(isNaN(distancia) || isNaN(velocidade)){
        document.getElementById("texto").innerHTML = "preencha todos os campos de acordo!";
     }

}

// -----------------------------------------------------------------04


function conversor(){
    var dolar = parseFloat(prompt("informe o valor em dolares: "));
    var cotacao = parseFloat(prompt("informe a cotação do dolar: "));
    var reais = dolar * cotacao;

    document.getElementById("texto").innerHTML= "o valor em reais é de: R$ " + reais.toFixed(2);

    if(isNaN(dolar) || isNaN(cotacao)){
        document.getElementById("texto").innerHTML = "preencha todos os campos de acordo!";
     }
}
// -----------------------------------------------------------------05


function montante(){
    var capital = parseFloat(prompt("informe o capital inicial: "));
    var juros = parseFloat(prompt("informe a taxa de juros (%): ")) / 100;
    var tempo = parseInt(prompt("informe o tempo (meses): "));
    var valor = capital * (1 + (juros * tempo));

    document.getElementById("texto").innerHTML= "o montante é de: R$ " + valor.toFixed(2);

    if(isNaN(capital) || isNaN(juros) || isNaN(tempo)){
        document.getElementById("texto").innerHTML = "preencha todos os campos de acordo!";
     }
}
// -----------------------------------------------------------------06



function pesoIdeal(){
    var altura = parseFloat(prompt("informe a altura em metros: "));
    var sexo = prompt("informe o sexo (masculino/feminino): ").toLowerCase();
    var peso;

    if (sexo === "masculino") {
        peso = (72.7 * altura) - 58;
    } else if (sexo === "feminino") {
        peso = (62.1 * altura) - 44.7;
    } else {
        document.getElementById("texto").innerHTML = "sexo inválido! por favor, informe masculino ou feminino.";
        return;
    }

    document.getElementById("texto").innerHTML= "o peso ideal é de: " + peso.toFixed(2) + " kg";

    if(isNaN(altura)){
        document.getElementById("texto").innerHTML = "preencha todos os campos de acordo!";
     }
}

// --------------------------------------------------07


function maioridade(){
    var idade = parseInt(prompt("informe a idade: "));

    if (idade >= 18) {
        document.getElementById("texto").innerHTML = "a pessoa é maior de idade";
    } else {
        document.getElementById("texto").innerHTML = "a pessoa é menor de idade";
    }

    if(isNaN(idade)){
        document.getElementById("texto").innerHTML = "preencha todos os campos de acordo!";
    }
}

// ------------------------------------------08