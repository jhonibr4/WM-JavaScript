function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Esperando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Esperando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Esperando promise 3...'))
//     .then(esperarPor)

function retornarValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

const executar = async () => {
    let valor = await retornarValor()
    console.log(valor)

    await esperarPor(1500)
    console.log('Async/Await 1...')
    
    await esperarPor(1500)
    console.log('Async/Await 2...')
    
    await esperarPor(1500)
    console.log('Async/Await 3...')

    return valor + 3
}

executar()
    .then(console.log)
