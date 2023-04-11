const numAleatorio = (min , max, quant) => {
    const arrayNumbers = []
    for(let i = 0; i < quant; i++){
        const number = (Math.random() * ( min - max )).toFixed()
        arrayNumbers.push(number)
       
        }
    
    
    return arrayNumbers
}

console.log(numAleatorio(1, 25 , 15))