//Arrow Function
const soma = (num1, num2 ) =>  num1 + num2

console.log(soma(1,5))

//Arrow function (this)

const lexico1 = () => console.log(this === exports)
const lexico2 = () => lexico1.bind({})

lexico1()
lexico2()


//parametro default

function log(text = 'Node'){
    console.log(text)
}

log()

//operador rest
function total(...numeros){
    total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1,5,63,8))