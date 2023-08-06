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
console.log(list.cabeca)

// Outro modo de fazer...

// let node1 = new No("Guilherme",26,0);
// let node2 = new No("Ana",34,1);
// node1.proximo = node2;

// let list = new List(node1)