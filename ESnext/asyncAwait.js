// Com  promise...
const http = require('http')
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let result = ''
            res.on('data', data => {
                result += data
            })
            res.on('end', () => {
                try{
                    resolve(JSON.parse(result))
                } catch(err){
                    reject(err)
                }
            })
        })
    })
}


Promise.all([getTurma('A'),getTurma('B'),getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))

getTurma('D').catch(e => console.log(e.message))

//Recurso ES8
//Objetico de simplificar o uso de promise...

let obterAluno = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
} //retorna um objeto Async Function.
obterAluno()
    .then(alunos => alunos.map(a => a.nome))
    .then(nome => console.log(nome))