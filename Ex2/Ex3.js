const calcularSalario = (total, hora, nome) => {
    const salarioTotal = hora * total
    return `O funcionário ${nome}, tem o salário de R$:${salarioTotal}`
}
console.log(calcularSalario(176, 10, 'Jhonathan'))