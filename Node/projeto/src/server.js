const port = 3003
const express = require('express')

const app = express()
const database = require('./database')

app.use(express.json())

// app.get('/produtos', (req, res, next) => {
//     console.log('middleware1...')
//     next()
// })
app.get('/produtos', (req, res, next) => {
    res.send(database.getProdutos())//Convertido para JSON pelo método Send
})
app.get('/produtos/:id', (req, res, next) => {
    res.send(database.getProduto(req.params.id))//Convertido para JSON pelo método Send
})
app.post('/produtos', (req, res, next) => {
    const produto = database.salvarProduto({
        nome:req.body.nome,
        preco:req.body.preco
    })
    res.send(produto)
})
app.put('/produtos/:id', (req, res, next) => {
    const produto = database.salvarProduto({
        id:req.params.id,
        nome:req.body.nome,
        preco:req.body.preco
    })
    res.send(produto)
})
app.delete('/produtos/:id', (req, res, next) => {
    const produto = database.deleteProduto(req.params.id)
    res.send(produto)
})
app.listen(port, () => {
    console.log(`A porta que você está usando nessa aplicação é ${port}`)
})