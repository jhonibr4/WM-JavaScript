function Aula(nome, videoId){
    this.nome = nome
    this.videoId = videoId
}

const aula1 = new Aula('Bem vindo', 1234)
const aula2 = new Aula('Até mais', 5678)
console.log(aula1, aula2)

// Oque acontece quando usamos o "new"

function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até mais', 456)