let animais = [
  ["Princesa","Cachorro","Canis Lupus",5,],
  ["Donkey","Langur-Dourado","Trachypithecus geei",4],
  ["Donatello","Tartaruga","Chelonoidis carbonaria",15],
  ["Bolinho","Gato","Felis catus",7]
]

for (let i = 0; i < animais.length; i++) {
  console.log("-------------------------------")
  for (let j = 0; j < animais[i].length; j++) {
    console.log(animais[i][j])
  }
}