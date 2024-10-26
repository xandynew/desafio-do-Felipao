//Desafio Classificador de nível de Herói.

//Criar uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói.

let nomeHeroi = "Xandy"
let quantidadeExperienciaXP = 99999

//Utilizar uma estrutura de decisão para apresentar alguma das mensagens:
//Se XP for menor do que 1.000 = Ferro;

if (quantidadeExperienciaXP <= 1000){
    nivel = "Ferro"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "!")
}

//Se XP for entre 1.001 e 2.000 = Bronze

else if (quantidadeExperienciaXP > 1000 && quantidadeExperienciaXP <= 2000){
    nivel = "Bronze"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "!")
}

//Se XP for entre 2.001 e 5.000 = Prata

else if (quantidadeExperienciaXP > 2000 && quantidadeExperienciaXP <= 5000){
    nivel = "Prata"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "!")
}

//Se XP for entre 5.001 e 7.000 = Ouro

else if(quantidadeExperienciaXP > 5000 && quantidadeExperienciaXP <= 7000){
    nivel = "Ouro"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "!")
}

//Se XP for entre 7.001 e 8.000 = Platina

else if(quantidadeExperienciaXP > 7000 && quantidadeExperienciaXP <= 8000){
    nivel = "Platina"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "!")
}

//Se XP for entre 8.001 e 9.000 = Ascendente

else if(quantidadeExperienciaXP > 8000 && quantidadeExperienciaXP <= 9000){
    nivel = "Ascendente"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "!")
}

//Se XP for entre 9.001 e 10.000= Imortal

else if(quantidadeExperienciaXP > 9000 && quantidadeExperienciaXP <= 10000){
    nivel = "Imortal"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "!")
}

//Se XP for maior ou igual a 10.001 = Radiante

else {
    nivel = "Radiante"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "!")
}

//Ao final deve se exibir uma mensagem: "O Herói de nome **{nome}** está no nível de **{nivel}**"

