let a = 1
console.log(a)

let p = new Promise(function(cumprirPromesa) {
    cumprirPromesa(['Aline', 'Jhonathan'])//Só é possível enviar 1 parâmetro em uma promise, caso queira enviar mais envie um object
})

function primeiroElemento(array){
    return array[0]
}

function primeiraLetra(string){
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

p.then(function(valor){
    console.log(valor)
})
p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)