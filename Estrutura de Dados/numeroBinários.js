var resultado = []//guardo os restos
var caixa = -1

function conta(num) {
    while (num !== 0) {
        resto = parseInt(num % 2)
        resultado.push(resto)
        num = parseInt(num / 2)
        ++caixa
    }
    return resultado
}


function verificar() {
    return caixa == -1
}

function esvaziar() {
    if (caixa > -1) {
        caixa--
        num = resultado.pop()           
        return num          
    } else {
    return 'Pilha está vazia'     
    }
}
    


console.log(conta(5))


while (verificar() == false) {
    console.log(esvaziar())
}

console.log(esvaziar())

// console.log(resultado.length)
// console.log(caixa)
// console.log(verificar())
// console.log(esvaziar())
// console.log(esvaziar())
// console.log(esvaziar())
// console.log(esvaziar())
// console.log(esvaziar())
// console.log(caixa)



