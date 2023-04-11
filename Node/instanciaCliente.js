const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

//Contador A e B são um objeto então com a instancia é unica as duas valem o mesmo valor
// já a C e D saõ funções então o valor irá ser diferente, cada um terá seu próprio valor.

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()

console.log(contadorC.valor, contadorD.valor)