const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala Jhonathan!')
    process.exit()
} else {
    process.stdout.write('Digite o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`fala ${nome} `)
        process.exit()
    })
}