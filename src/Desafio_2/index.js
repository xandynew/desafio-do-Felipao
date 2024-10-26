
function calcularRanke(vitorias, derrotas){
    return vitorias - derrotas    
}

let saldoVitorias = calcularRanke(200, 5)

if ( saldoVitorias <= 10){
    nivel = "Ferro"
    console.log(`O Herói tem de saldo ${saldoVitorias} e está no nível ${nivel}!`)
} else if ( saldoVitorias > 10 && saldoVitorias <= 20){
    nivel = "Bronze"
    console.log(`O Herói tem de saldo ${saldoVitorias} e está no nível ${nivel}!`)
} else if ( saldoVitorias > 20 && saldoVitorias <= 50){
    nivel = "Prata"
    console.log(`O Herói tem de saldo ${saldoVitorias} e está no nível ${nivel}!`)
} else if ( saldoVitorias > 50 && saldoVitorias <= 80){
    nivel = "Ouro"
    console.log(`O Herói tem de saldo ${saldoVitorias} e está no nível ${nivel}!`)
} else if ( saldoVitorias > 80 && saldoVitorias <= 90){
    nivel = "Diamante"
    console.log(`O Herói tem de saldo ${saldoVitorias} e está no nível ${nivel}!`)
}else if ( saldoVitorias > 90 && saldoVitorias <= 100){
    nivel = "Lendário"
    console.log(`O Herói tem de saldo ${saldoVitorias} e está no nível ${nivel}!`)
} else {
    nivel = "Imortal"
    console.log(`O Herói tem de saldo ${saldoVitorias} e está no nível ${nivel}!`)
}

   
  


