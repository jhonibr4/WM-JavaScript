const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    const mulherChinesa = pessoa => pessoa.pais === 'China' && pessoa.genero === "F"
    const menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }
    const result = funcionarios.filter(mulherChinesa).reduce(menorSalario)
    console.log(result)
})