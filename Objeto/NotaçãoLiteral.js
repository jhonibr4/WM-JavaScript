const a = 1
const b = 2
const c = 3

//Forma de criar o objeto mudando o nome do atributo do objeto
const obj1 = { primeiro: a, segundo: b, terceiro: c}
const obj2 = { a, b, c}
console.log(obj1, obj2)

const obj3 = {}
const nomeAttri = 'nota'
const valorAttri = 7.75
obj3[nomeAttri] = valorAttri
console.log(obj3)

const obj4 = {[nomeAttri]: valorAttri}
console.log(obj4)

const obj5 = {
    funcao1: function (){
        // ...
    },
    funcao2(){

    }
}
console.log(obj5)