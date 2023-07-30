let candidatos = {
  candidato_X: 889,
  candidato_Y: 847,
  candidato_Z: 515,
  branco: 0,
};
let candidato_X = 0, candidato_Y = 0, candidato_Z = 0, branco = 0, nulo = 0;
let loop = true;
let finalizaVotacao,voto;
window.alert(`Candidatos:\n- candidato_X = 889\n- candidato_Y = 847\n- candidato_Z = 515\n- branco = 0`)
while (loop) {
  try {
    voto = window.prompt("Digite o número do candidato");
    if (isNaN(voto)) {
      throw new Error("Por favor! Digite um número");
    }
    if (voto == 889) {
      candidato_X++;
    } else if (voto == 847) {
      candidato_Y++;
    } else if (voto == 515) {
      candidato_Z++;
    } else if (voto == 0) {
      branco++;
    } else {
      nulo++;
    }
    finalizaVotacao = window.confirm(
        "Se deseja finalizar votação clique em cancel, se deseja continuar clique em OK"
      );
      if (!finalizaVotacao) {
        calculaVotos();
        loop = false;
        break;
      }
  } catch (err) {
    window.alert(err);
  }
}

function calculaVotos(){
    if(candidato_X > candidato_Y && candidato_X > candidato_Z) {
            window.alert("Vencedor candidato X, QTD de votos: " + candidato_X)
    }else if(candidato_Y > candidato_X && candidato_Y > candidato_Z){
        window.alert("Vencedor candidato y, QTD de votos: " + candidato_Y)
    }else{
        window.alert("Vencedor candidato Z, QTD de votos: " + candidato_Z)
    }
    window.alert(`candidato X: ${candidato_X} votos\ncandidato Y: ${candidato_Y} votos\ncandidato Z: ${candidato_Z} votos\nvotos brancos: ${branco}\nvotos nulos: ${nulo}`)
}
