let depo_atual = 0;

function trocar_depo(seta){
  console.log("seta: " + seta);
  
  depoimentos = document.getElementsByClassName('depo');
  
  console.log("quantidade: " + depoimentos.length);

  //se for "left", diminui o contador
  if(seta == 'left'){ 
    //apenas diminui se nao tiver chegado no limite minimo
    if(depo_atual > 0) { 
      depo_atual--;
    }
  }
  //se for "right", aumenta o contador
  else if(seta == 'right'){ 
    //apenas aumenta se nao tiver chegado no limite maximo
    if(depo_atual < (depoimentos.length-1)) {
      depo_atual++;
    }
  }

  //display de todos os depoimentos como "none"
  for(let i=0; i < depoimentos.length; i++) {
    depoimentos[i].style.display = "none";
  }
  // depoimentos.forEach(depo => {
  //   depo.style.display = "none";
  // });

  //display do depo atual como "flex"
  depoimentos[depo_atual].style.display = "flex";

  console.log("depoimento atual: " + depo_atual);
}