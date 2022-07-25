
const numeros = {   1:["   ","  |","  |"],   2:[" _ ", " |","| "],   3:[" _ "," |"," _|"],   4:["   ","||", "  |"],   5:[" _ ","|_ "," |"],   6:[" _ ","| ","||"],   7:[" _ ","  |", "  |"],   8:[" _ ","||","||"],   9:[" _ ","||"," |"],   0:[" _ ","| |", "||"], } 


function dibujar(numero) {
    numero = numero.toString().split('')
    const result = []

    while (numero.length > 0) {
        const n = numero.shift()
        const str = numeros[n]
        for (let i = 0;i < str.length;i += 1) {
            if (!result[i]) {
                result[i] = []
            }
            result[i].push(str[i])
        }
    }
    result.forEach(line => console.log(line.join('')))}
