let nomes = ["Amanda","Melissa","João","Miguel","Guilherme","Olavo","Eduardo","Jorge","Paulo","Alan"];
let idades = [21,42,23,54,17,29,23,34,32,25];
let cores = ["Azul","Roxo","Amarelo","Vermelho","Laranja","Roxo","Preto","Azul","Branco","Roxo"];
console.log(nomes.length)
console.log(idades.length)
console.log(cores.length)

console.log("Nomes: ")
nomes.forEach(nome => {
  console.log(nome)
});
console.log("-------------------------------")
console.log("Idades: ")
idades.forEach(idade => {
  console.log(idade)
});
console.log("-------------------------------")
console.log("Cores: ")
cores.forEach(cor => {
  console.log(cor)
});

/* Mudança no valor da cor na posição 4*/ 
cores.splice(4,1,"Amarelo");
console.log("-------------------------------")
console.log("Cores: ")
cores.forEach(cor => {
  console.log(cor)
});

/* Mudança no valor da idade na posição 6*/ 
idades.splice(6,1,35);
console.log("-------------------------------")
console.log("Idades: ")
idades.forEach(idade => {
  console.log(idade)
});