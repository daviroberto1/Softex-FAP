let array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
let el = 20;
let indice;
for (let i = 0; i < array.length; i++) {
    if(array[i] === el) { 
      indice = i;
      break;
    }
    indice = -1;
}

if (indice == -1) {console.log("Elemento não encontrado!")}
else{console.log(`Elementro encontrado na posição ${indice} do array`)}