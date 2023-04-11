//Object.preventExtensions evita adicionar atributos
//Poderá ser excluido ou alterado, mas ainda não será possivel adicionar atributos

const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal Não deixa nem adicionar nem excluir atributos, mas é possivel modifica-los

const pessoa = { nome:'Aline', idade:35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)