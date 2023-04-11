const estaEntre = (num, min, max, inclusivo = false) => {
    if(inclusivo) return num >= min && num <= max
    else return num > min && num < max
       
}
console.log(estaEntre(100,5,100, true))