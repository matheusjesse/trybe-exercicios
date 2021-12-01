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

