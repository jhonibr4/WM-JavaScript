
function gerarNumeroEntre(min, max, proibido){
    if(min > max) [max , min] = [min , max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(proibido.includes(aleatorio)){
            reject('Numero repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros, tentativa = 1){
    try{
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumeroEntre(1, 60, numeros))
        }
        return numeros
    } catch(e){
        if(tentativa > 10){
            throw 'Não deu certo!'
        } else {
            return gerarMegaSena(qtdeNumeros, tentativa + 1)
        }
    }
}
gerarMegaSena(10)
    .then(console.log)
    .catch(console.log)