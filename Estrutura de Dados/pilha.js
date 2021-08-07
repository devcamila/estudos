var pilha = []
var tamanhoPilha = -1


function adicionar(num) {
    if (tamanhoPilha < 10) {  
        tamanhoPilha++
        pilha.push(num)
    } else {
        console.log('Pilha está cheia')
    }
}

function verificar() {
    return tamanhoPilha == -1
}

 function retirar() {
    if (tamanhoPilha > -1) {        
        num = pilha.pop()
        tamanhoPilha--
        return num
    } else {
        return 'Pilha está vazia'
        
    }

}   
adicionar(01)
adicionar(02)
adicionar(03)
adicionar(04)
adicionar(05)
adicionar(06)

console.log(pilha)

while (verificar() == false) {
    console.log(retirar())
}

console.log(retirar())

// console.log(retirar())
// console.log(retirar())
// console.log(retirar())
// console.log(retirar())
// console.log(retirar())
// console.log(retirar())
