const tecnologias = new Map()
tecnologias.set('react', {framework: true})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // Verifica se o elemento existe
chavesVariadas.delete(123)// Retorna verdadeiro se foi excluido.
console.log(chavesVariadas.has(123)) // Verifica se o elemento existe

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)