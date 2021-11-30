//Exercício 1

let n = 5;

let asterisco = '';

for(let x = 0; x < n; x++){
        asterisco += '*';
}


for(let i = 0; i < n; i++){
    console.log(asterisco);
}

//Exercício 2

let asterisco2 = '';

for(let y = 0; y < n; y++){
    asterisco2 += '*';
    console.log(asterisco2);
}


//Exercício 3

let asterisco3 = '';


for(let linha = 1; linha <= n; linha++){
       
    for(let p = n - linha; p >=1; p--){
        asterisco3 += ' ';        
    }    
    for(let r = 0; r < linha; r++){
        asterisco3 += '*';
    }
    console.log(asterisco3);      
    asterisco3 = '';
}