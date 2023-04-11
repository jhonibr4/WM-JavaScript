const fs = require('fs')
                            //não precisa do . no inicio do caminho
const caminho = __dirname + '/arquivo.json'

//sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)

//assincrono...
fs.readFile(caminho, 'utf-8',(err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(`${config.db.host}:${config.db.port}`)

fs.readdir(__dirname, (err, conteudo) => {
    console.log('Conteúdo da pasta...')
    console.log(conteudo)
})