function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE')
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

esperaAi('conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Buscando dados da base', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi(22222, rand(1, 3))
    }).then(resposta => {
        console.log(resposta)
    }).then(() => {
        console.log('Exibe os dados')
    })
    .catch(e => {
        console.log('ERRO', e)
    })