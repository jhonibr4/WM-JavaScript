console.log(typeof Array, typeof new Array, typeof [])

let aprovados  = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Etoo')

aprovados[9] = 'Não sei'

console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //Ordenar o array
console.log(aprovados)

delete aprovados[1]

console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
//SPLICE: Adiciona elementos de um determidado indice, remove elemento e remove e adiciona ao mesmo tempo
//aprovados.splice(1,2) //Remove dos elementos apartir do indice 1
//aprovados.splice(1,2, 'Elemento1', 'Elemento2') //Remove dos elementos apartir do indice 1 RETORNA ['Bia',  'Elemento1', 'Elemento2']]
//aprovados.splice(1,0, 'Elemento1', 'Elemento2') //Remove dos elementos apartir do indice 1 RETORNA ['Bia',  'Elemento1', 'Elemento2', 'Carlos', 'Ana']]
