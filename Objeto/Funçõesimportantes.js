const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // Retorna o nome do atributo
console.log(Object.values(pessoa))// Retorna o valor do atributo
console.log(Object.entries(pessoa))// Retorna um array com nome e valor do atributo

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // Define se ela será mostrada o atributo caso utilize o Object.keys
    writable: false, // Define se ela poderá ser alterada
    value: '01/01/2019'
})
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3 , a: 4}
const obj = Object.assign(dest, o1, o2) //Concatena apartir do segundo objeto declarado no primeiro. Caso tenha um com o nome igaul

Object.freeze(obj)
o1.b = 1542

console.log(obj)
//será sobescrito.