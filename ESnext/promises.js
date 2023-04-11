function falarDepoisDe(segundos, frase){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(frase)
        }, segundos * 1000)
    })
}
falarDepoisDe(5, 'Olá amigo')
    .then(frase =>  frase.concat('?!?!'))
    .then(outraFrase => console.log(outraFrase))