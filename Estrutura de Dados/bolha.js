var valores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

function ordenar() {
    let inicio = 0
    let fim = valores.length
    let tmp

for (vezes = 0; vezes <= fim; vezes++){
    for (pos = inicio; pos < fim -1 - vezes; pos++) {
        if(valores[pos] > valores[pos+1]) {
            tmp = valores[pos]
            valores[pos] = valores[pos +1]
            valores[pos +1] = tmp
        }
    }
    }
}

ordenar()
console.log('vai')
console.log(valores)

