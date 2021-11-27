// exercicio 01

let a = 10;
let b = 5;
let c = 12;
const ex =  -1;

console.log("Adição: ", a + b);

console.log("Subtração: ", a - b);

console.log("Multiplicação: ", a * b);

console.log("Divisão: ", a / b);

console.log("Módulo: ", a % b);

// exercicio 02

if(a > b){
    console.log( a, "é o maior número!");
}else if( b > a){
    console.log(b, "é o maior numero!");
}else if( b == a){
    console.log("Os numeros são iguais!!");
}else{
    console.log("Entre com numeros válidos.");
}

// exercicio 03

if(a > b && a > c){
    console.log( a, "é o maior número!");
}else if( b > a && b > c){
    console.log(b, "é o maior numero!");
}else if( c > a && c > b){
    console.log( c ,"é o maior numero!");
}else{
    console.log("Entre com numeros válidos.");
}

// exercicio 04


    if(ex > 0){
        console.log("Positive");
    }else if(ex < 0){
        console.log("Negative");
    }else
    {
        console.log("Zero");
    }

// exercicio 05

let anguloUm = 50;
let angulodois = 70;
let angulotres = 60;

let somadosangulos = anguloUm + angulodois + angulotres;

if(somadosangulos == 180){
    console.log(true);
}else if (somadosangulos != 180){
    console.log(false);
}else{
    console.log("Erro ao calcular angolos!")
}

