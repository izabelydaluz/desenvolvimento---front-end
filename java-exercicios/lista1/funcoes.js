// ------------------------------nome
function inserirnome(){

    var nome = prompt("Digite seu nome:");
    var telefone = prompt("Digite seu telefone:");

    document.getElementById("texto").innerHTML = "Olá, " + nome ;
    document.getElementById("texto").innerHTML = "Seu telefone é: " + telefone ;

    if(nome === null || nome === "" || telefone === null || telefone === ""){
        document.getElementById("texto").innerHTML = "Nome ou telefone não informados!";


    
    }}


// -------------------temperatura

function converterTemperatura(){
            
        var celsius = prompt("Digite a temperatura em graus Celsius:"); // prompt para entrada do usuário
        var fahrenheit = (9/5) * celsius + 32;
        document.getElementById("texto").innerHTML = celsius + " graus Celsius é igual a " + fahrenheit + " graus Fahrenheit.";
         if(celsius === null || celsius === ""){
            document.getElementById("texto").innerHTML = "Temperatura não informada!";
    }}


// -------------------------media

function media(){
            
    var nota1 = parseFloat(prompt("Digite a primeira nota:")); // parseFloat para converter a string em número
    var nota2 = parseFloat(prompt("Digite a segunda nota:"));
    var nota3 = parseFloat(prompt("Digite a terceira nota:"));
    var media = (nota1 + nota2 + nota3) / 3;

    document.getElementById("texto").innerHTML = "A média das notas é: " + media.toFixed(2); 
    //toFixed(2) para limitar a duas casas decimais
     if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){// isNaN verifica se o valor não é um número
        document.getElementById("texto").innerHTML = "Por favor, insira valores numéricos válidos para as notas!";
}}

// ----------------------compra
function calcularCompra(){
    var nome = prompt("Digite seu nome:");
    var produto = prompt("Digite o nome do produto:");
    var quantidade = parseInt(prompt("Digite a quantidade do produto:")); 
    //parseInt para converter a string em número inteiro
    var preco = parseFloat(prompt("Digite o preço do produto:"));
    
    var valorTotal = quantidade * preco;
    
    document.getElementById("texto").innerHTML = "Olá, " + nome + "! O valor total da sua compra de " + quantidade + " unidade(s) de " + produto + " é R$ " + valorTotal.toFixed(2) + ".";
    
    if(nome === null || nome === "" || produto === null || produto === "" || isNaN(quantidade) || isNaN(preco)){
        document.getElementById("texto").innerHTML = "Por favor, preencha todos os campos corretamente!";
    }
}


// --------------------aumento

function aumento(){
    var nome = prompt("informe seu nome");
    var cargo = prompt("informe seu cargo");
    var salario = parseFloat(prompt("informe seu salario"));

    var aumento = salario *(5/100);

    var salario_n = salario + aumento;

    document.getElementById("texto").innerHTML = "olá" +nome + "seu cargo é" + cargo + "seu salario com aumento é de R$" + salario_n.toFixed(2);

    if(nome == null || nome == "" ||cargo == null || cargo == "" || isNaN(salario)){

        document.getElementById("texto").innerHTML = 
        "preencha todos os campos de acordo!";
    } 

}

// ------------------------- triangulo

function triangulo(){
    
    var base = parseFloat(prompt("informe a base: "));
    var altura = parseFloat(prompt("informe a altura: "));

    var area = (base + altura)/ 2;

    document.getElementById("texto").innerHTML = "a area é de: " + area.toFixed(2);

    

    if(isNaN(base) || isNaN(altura)){
        document.getElementById("texto").innerHTML = "preencha todos os campos de acordo!";
    }
 
}

//--------------------------imc

function imc(){
    var nome = prompt("informe seu nome: ");
    var idade = parseInt(prompt("informe sua idade: "));
    var peso = parseFloat(prompt("informe seu peso: "));
    var altura = parseFloat(prompt("informe sua altura: "));

    var imc = peso / (altura * altura);

    document.getElementById("texto").innerHTML = "ola" + nome + "sua idade é" + idade + "seu imc é: " + imc.toFixed(2);

    if (nome == null || nome == "" || isNaN(idade) || isNaN(peso) || isNaN(altura)){
        document.getElementById("texto").innerHTML = "preencha todos os campos de acordo!";
    }


}

//-------------------------------parcelas

function pacelas(){

    var nome = prompt("informe seu nome: ");
    var total = parseFloat(prompt("informe o valor da compra: "));

    var num_parcelas = parseInt(prompt("informe o numero de parcelas:"));

    var valor_parcela = total / num_parcelas;

    document.getElementById("texto").innerHTML = "ola" +
    nome + "valor de cada parcela é :" + valor_parcela.toFixed(2);
     
    if(nome == null || nome == "" || isNaN(total) || isNaN(num_parcelas)){
        document.getElementById("texto").innerHTML = "preencha todos os campos de acordo!";
    }
    
}

//---------------------------horas

function horas(){
    var nome = prompt("informe seu nome:");
    var num_horas = parseInt(prompt("informe o numero de horas trabalhadas: "));
    var valor_hora = parseFloat(prompt("informe o valor por hora : "));

    var salario = num_horas * valor_hora;

    document.getElementById("texto").innerHTML = "ola" + nome + "o seu salario é de: " +salario.toFixed(2);

    if(nome == null || nome == "" || isNaN(num_horas) || isNaN(valor_hora)){
        document.getElementById("texto").innerHTML = "preencha todos os campos de acordo!";
    }
}

//--------------------------------Faca um script que receba como entrada os dados de dois valores numericos (valor1  e valor2) e a operação matemárica desejada (adição, subtração, multiplicação e divisão). Após calcule o resultado de cada operação e ao final mostrar o resultado calculado.


function calculadora(){

    var valor1 = parseFloat(prompt("informe o primeiro valor: "));
    var valor2 = parseFloat(prompt("informe o segundo valor: "));
    var operacao = prompt("informe a operação desejada (adição, subtração, multiplicação, divisão): ");

    var resultado;

    if(operacao === "adição"){
        resultado = valor1 + valor2;
    } else if(operacao === "subtração"){
        resultado = valor1 - valor2;
    } else if(operacao === "multiplicação"){
        resultado = valor1 * valor2;
    } else if(operacao === "divisão"){
        resultado = valor1 / valor2;
    } else {
        document.getElementById("texto").innerHTML = "Operação inválida!";
        return;
    }

    document.getElementById("texto").innerHTML = "O resultado da " + operacao + " entre " + valor1 + " e " + valor2 + " é: " + resultado.toFixed(2);

    if(isNaN(valor1) || isNaN(valor2)){
        document.getElementById("texto").innerHTML = "Por favor, insira valores numéricos válidos!";
    }
}
