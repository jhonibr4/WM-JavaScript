const receberPrimeiroEUltimo = (array) => {
    let quantArray = array.length - 1
    return [array[0], array[quantArray]]
}
console.log(receberPrimeiroEUltimo([1,5,8,10,5,2,3]))