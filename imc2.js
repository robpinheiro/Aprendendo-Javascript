const nome = 'Robson'
const peso = 93
const altura = 1.75

const imc = peso / (altura * altura)

    if (imc >= 30) {
        console.log (`${nome}, você está acima do peso`)
    } else {
        console.log (`${nome}, você não está acima do peso`)
    }