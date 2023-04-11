const fs = require('fs')
const path = require('path')

const lerArquivo = (caminho) => {
    return new Promise(resolve => {
        fs.readFile(caminho, 'utf-8', (err, conteudo) => {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler...')
    })
}
let caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O resultado final é: ${conteudo}`)
    .then(console.log)