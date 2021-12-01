//E 1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log("Bem-vinda, " + info.personagem);

//E 2
  info['recorrente'] = 'Sim';

  console.log(info);

//E 3

  for(let key in info){
      console.log(key);
  }


//E 4

  for(let x in info){
      console.log(info[x]);
  }

//E 5

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}

for(let u in info){

    if(info[u] === 'Sim' && info2[u] === 'Sim'){
        console.log("Ambos recorrentes")
        break;
        }
    
    console.log(info[u] + " e " + info2[u]);
    

}