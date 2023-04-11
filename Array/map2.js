
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]


const array = Object.keys(carrinho).map(i => JSON.parse(carrinho[Number(i)]))
// OU
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

array.map(e => {
    console.log(`Item: ${e.nome} R$: ${e.preco}`)
})
//OU
const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)