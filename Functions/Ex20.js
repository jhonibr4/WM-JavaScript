const contarNotas = (num) => {
    let num100 = 0
    let num50 = 0
    let num10 = 0
    let num1 = 0
    newValue = 0
    while(num === newValue){
        if(newNumber < num){
            num100 += 1
            continue
        }
        if(50 < num){
            newNumber += 50
            continue
        }
        if(10 < num){
            newNumber += 10
            continue
        }
        if(5 < num){
            newNumber += 5
            continue
        }
        if(1 < num){
            newNumber += 1
            continue
        }   
    }
    console.log(num100)
}
contarNotas(244)