/*
let array = [3, 7, 9, 1, 0];
let numEscolhido;

// Fila
while (array.length !== 0) {
  array.shift();
  console.log(array); // [3,7,9,1,0] > [7,9,1,0] > [9,1,0] > [1,0] > [0] > []
}

// Lista
array = [3, 7, 9, 1, 0];
function removeEl(numEscolhido) {
  let indice = array.indexOf(parseInt(numEscolhido));
  if (indice !== -1) {
    array.splice(indice, 1);
    return true;
  } else {
    return false;
  }
}

while (array.length !== 0) {
  numEscolhido = window.prompt(
    "Digite o número a ser removido: [3, 7, 9, 1, 0]"
  );
  removeEl(numEscolhido); // Remove os números escolhidos
  console.log(array);
}

// Pilha
array = [3, 7, 9, 1, 0];
while (array.length !== 0) {
  array.pop();
  console.log(array); // [3,7,9,1,0] > [3,7,9,1] > [3,7,9] > [3,7] > [3] > []
}
*/

class No { 
  constructor(nome,idade, refFilho) {
    this.nome = nome;
    this.idade = idade;
    this.refFilho = refFilho;
    this.proximo = null;
  }
}

class List {
  constructor(head = null) {
      this.head = head
  }
  addFirst(nome,idade,refFilho){
    const newNo = new No(nome,idade,refFilho);
    newNo.proximo =this.cabeca;
    this.cabeca = newNo; 
  }
}

let list = new List();
list.addFirst("Guilherme",26,0)
console.log(list.head)


// let node1 = new No("Guilherme",26,0);
// let node2 = new No("Ana",34,1);
// node1.proximo = node2;

// let list = new List(node1)