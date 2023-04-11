Object.prototype.atrri0 = 'Z'
const avo = { atrri1: 'A' }
const pai = { __proto__:avo, atrri2: 'B' }
const filho = { __proto__:pai, atrri3: 'C' }

console.log(filho.atrri1)
console.log(filho.atrri2)
console.log(filho.atrri0)

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}
const ferrari = {
    modelo: 'F40',
    velMax: 324
}
const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

console.log(ferrari)
console.log(volvo)

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

volvo.aceleraMais(50)
console.log(volvo.status())
