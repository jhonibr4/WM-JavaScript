console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Olá mundo'.reverse())

Array.prototype.first = function() {
    return this[0]
} 
console.log([54,48,48,4,51,85].first())

//Não fazer
String.prototype.toString = function() {
    return 'Lascou tudo'
}
console.log('Eai malandro'.reverse())