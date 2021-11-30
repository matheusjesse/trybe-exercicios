//Exercicio 1
//Exercicio 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);



let somaArrays = 0;

for(let i = 0; i < numbers.length; i++){
    somaArrays = somaArrays + numbers[i];
}

console.log(somaArrays);


let mediaAritimetica = somaArrays / numbers.length;

console.log("Média aritimética: " + mediaAritimetica);

if(mediaAritimetica > 20){
    console.log("Valor maior que 20!")
}else{
    console.log("Valor menor ou igual a 20!")
}

      let maiorNumero = numbers[0];
   
         
        for(let j = 0; j <numbers.length + 1; j++){
            
            if(numbers[j] > maiorNumero){
                maiorNumero = numbers[j];
            }
        }

    console.log("maior numero: " + maiorNumero);


    
    


