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

// exercicio 6
/*
function pecadexadrez(peca){   



    switch(peca.toLowerCase()){
        case 'rei':
            console.log("Se move 1 casa em qualquer direção");
            break;
        case 'dama':
            console.log("Se move em qualquer direção, porém quantas casa quiser");
            break;
        case 'torre':
            console.log("Se move em linha reta, tanto na horizontal quanto na vertical");
            break;
        case 'bispo':
            console.log("Se move na diagonal, quantas casas quiser");
            break;
        case 'cavalo':
            console.log("Se move em 'L' conhecido também como 'um-dois'");
            break;
        case 'peão':
            console.log("Se move uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.");
            break;
        default:
            console.log("Erro, digite uma peça valida!!");
    }
   
}

return pecadexadrez('BisPo');
*/

// exercicio 07

/*
function notasAlfabeticas(nota){

    nota = 50;

    if(nota >= 90){
        console.log( 'A');
    }else if(nota >= 80){
        console.log( 'B');
    }else if(nota >= 70){
        console.log( 'C');
    }else if(nota >= 60){
        console.log( 'D');
    }else if(nota >= 50){
        console.log( 'E');
    }else if(nota > 0 && nota < 50){
        console.log( 'F');
    }else{
        console.log( 'erro!');
    }

}

return notasAlfabeticas(50);

*/