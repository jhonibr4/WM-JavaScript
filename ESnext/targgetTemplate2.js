function real(partes, ...valores){
    const results = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$: ${valor.toFixed(2)}`
        results.push(partes[indice], valor)
    })

    return results.join('')
}

const valorTotal = 29.99
const valorParcela = 11
console.log(real `1x de ${valorTotal} ou 3x de ${valorParcela}`)