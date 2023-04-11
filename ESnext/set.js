//Set: estrutura não indexada
//não aceita repetição

const times = new Set()
times.add('Vasco')
times.add('Santos').add('Palmeiras')
times.add('Vasco') // Não será adicionado por conta que já existe no SET

console.log(times)
console.log(times.has('Santos'))
times.delete('Palmeiras')
console.log(times)

const nomes = ['Jhonathan', 'Aline', 'Etc']
const nomesSet = new Set(nomes)
console.log(nomesSet)