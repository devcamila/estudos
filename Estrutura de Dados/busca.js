//BUSCA SEQUENCIAL
/*
var valores = [5, 8, 90, 10, 22, 45, 38]

function busca(num) {
    for (let i = 0; i < valores.length; i++) {
        if (num === valores[i]) {
            return 'Posição: ' + i
        }
    }
    return 'Número não encontrado.'
}

console.log(busca(10))
console.log(busca(11))
console.log(busca(45))
*/

//BUSCA ORDENADA - BUSCA BINÁRIA (usa base logarítima, reduzindo o espaço de busca)
var numeros = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

function buscaBinaria(num) {
    let inicio, fim
    let meio
    let passos = 0
    inicio = 0;
    fim = numeros.length 
    
    while (inicio <= fim) {
        meio = parseInt((inicio + fim) / 2)
        passos++
        if (num == numeros[meio]) {          
            console.log('Achei em ' + passos + ' passos')
            return meio
        } else if (num > numeros[meio]) {
            inicio = meio + 1               
        } else {
            fim = meio - 1            
        }    
    }
    return 'Número não encontrado em '  + passos + ' passos'    
}
  
console.log(buscaBinaria(0))
console.log(buscaBinaria(10))
console.log(buscaBinaria(30))
console.log(buscaBinaria(40))
console.log(buscaBinaria(50))



