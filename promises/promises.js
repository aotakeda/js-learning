const prometoAprenderJavascript = () => {
    return new Promise((resolve, reject) => {
        resolve(console.log('Aprendi JavaScript.'));
})
}

prometoAprenderJavascript().then(console.log('Agora consigo criar um site.'))