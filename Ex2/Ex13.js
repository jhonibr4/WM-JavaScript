const filtrarNumeros = (arr) => {
    let result = arr.filter(e => {
        return typeof e === 'number'
    })
    return result
}
console.log(filtrarNumeros([1,5,5,,8, 'Eiei', '3']))