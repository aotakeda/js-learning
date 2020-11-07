const prometoAprenderJavascript = () => {
    return new Promise((resolve, reject) => {
        resolve(console.log('Promessa de aprender JavaScript cumprida.'));
    })
}

const prometoAprenderNode = () => {
    return new Promise((resolve, reject) => {
        resolve(console.log('Promessa de aprender Node cumprida.'));
    })
}

prometoAprenderJavascript().then(() => {
    prometoAprenderNode()
    console.log('Aprendi os dois.')
})

Promise.all([prometoAprenderJavascript(), prometoAprenderNode()]).then(() => {
    console.log('Aprendi os dois concorrentemente.')
})

Promise.race([prometoAprenderJavascript(), prometoAprenderNode()]).then(() => {
    console.log('Assim que alguma das promises terminar, eu aviso.')
})