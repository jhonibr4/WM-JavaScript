const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //Tira o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')// Aciciona um elemento no começo do array
console.log(pilotos)


pilotos.splice(2,0 , 'Bottas', 'Massa')//Adicionando elementos em determidados pontos do array
console.log(pilotos)

pilotos.splice(3, 1) //Removendo elemetno de um determinado ponto do array
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Cria um array apartir de determinado indice passado no parâmetro
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Cria um array apartir de determinado indice passado no parâmetro
// e o segundo parâmetro é para indicar até qual indice será incluido
console.log(algunsPilotos2)