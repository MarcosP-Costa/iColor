 let botaoLimpar = document.getElementById('botao')
 let botaoAleatorio = document.getElementById('allRandom')
 let redCircle = document.getElementById('redCircle')
 let blueCircle = document.getElementById('blueCircle')
 let greenCircle = document.getElementById('greenCircle')
 let redButton = document.getElementById('redButton')
 let blueButton = document.getElementById('blueButton')
 let greenButton = document.getElementById('greenButton')
 let body = document.getElementsByTagName('body')[0]
 let botaoCopiar = document.getElementById('copiarCor')
 let redText = document.getElementById('textRed')
 let greenText = document.getElementById('textGreen')
 let blueText = document.getElementById('textBlue')
 let inputSliderRed = document.getElementById("inputRed");
 let valueRightRed = document.getElementById("vrRed");
 let valueLeftRed = document.getElementById("vlRed");
 let inputSliderGreen = document.getElementById("inputGreen");
 let valueRightGreen = document.getElementById("vrGreen");
 let valueLeftGreen = document.getElementById("vlGreen");
 let inputSliderBlue = document.getElementById("inputBlue");
 let valueRightBlue = document.getElementById("vrBlue");
 let valueLeftBlue = document.getElementById("vlBlue");

 //transformar essas personalizações em funções

 botaoLimpar.addEventListener('click', event => {
     event.preventDefault()
     limparCampos()
 })

 botaoCopiar.addEventListener('click', event => {
    event.preventDefault()
     funcaoCopiarRGB()
     
 })

 botaoAleatorio.addEventListener('click', event => {
     event.preventDefault()
     validarCampoVazio()
     redText.value = gerarCor()
     greenText.value = gerarCor()
     blueText.value = gerarCor()
     R = redText.value
     G = greenText.value
     B = blueText.value
     inputSliderRed.value = R
     inputSliderBlue.value = B
     inputSliderGreen.value = G
     colorirRed(R)
     colorirGreen(G)
     colorirBlue(B)
     colorirBody(R, G, B)
 })


 redText.addEventListener('keyup', event => {
     validarCampoVazio()
     R = redText.value
     G = greenText.value
     B = blueText.value
     colorirRed(R)
     colorirBody(R, G, B)
 })

 greenText.addEventListener('keyup', event => {
     validarCampoVazio()
     R = redText.value
     G = greenText.value
     B = blueText.value
     colorirGreen(G)
     colorirBody(R, G, B)
 })

 blueText.addEventListener('keyup', event => {
     validarCampoVazio()
     R = redText.value
     G = greenText.value
     B = blueText.value
     colorirBlue(B)
     colorirBody(R, G, B)
 })


 redButton.addEventListener('click', event => {
     event.preventDefault()
     let R, G, B
     validarCampoVazio()
     redText.value = gerarCor()
     R = redText.value
     G = greenText.value
     B = blueText.value
     inputSliderRed.value = R
     colorirRed(R)
     colorirBody(R, G, B)
 })

 blueButton.addEventListener('click', event => {
     event.preventDefault()
     let R, G, B
     validarCampoVazio()
     blueText.value = gerarCor()
     R = redText.value
     G = greenText.value
     B = blueText.value
     inputSliderBlue.value = B
     colorirBlue(B)
     colorirBody(R, G, B)
 })

 greenButton.addEventListener('click', event => {
     event.preventDefault()
     let R, G, B
     validarCampoVazio()
     greenText.value = gerarCor()
     R = redText.value
     G = greenText.value
     B = blueText.value
     inputSliderGreen.value = G
     colorirGreen(G)
     colorirBody(R, G, B)
 })

 //gerarCor = RR GG BB

 let randomNumber = (param) => {
     let min = Math.ceil(0)
     let max = Math.floor(param + 1)
     return Math.floor(Math.random() * (max - min)) + min;
 }

 let gerarCor = () => { //returna 2 valores hexadecimais
     let corAleatoria = ''
     corAleatoria = corAleatoria + randomNumber(2).toString()
     corAleatoria = corAleatoria + randomNumber(5).toString()
     corAleatoria = corAleatoria + randomNumber(5).toString()
     return corAleatoria
 }

 let colorirBody = (R, G, B) => { //colore o body
     let RGB = `rgb(${R}, ${G}, ${B})`
     console.log(RGB);
     body.style.backgroundColor = RGB
 }

 let colorirRed = (R) => {
     let redColor = `rgb(${R},0,0)`
     redCircle.style.fill = redColor
     redButton.style.backgroundColor = redColor
 }

 let colorirGreen = (G) => {
     let greenColor = `rgb(0,${G},0)`
     greenCircle.style.fill = greenColor
     greenButton.style.backgroundColor = greenColor
 }

 let colorirBlue = (B) => {
     let blueColor = `rgb(0,0,${B})`
     blueCircle.style.fill = blueColor
     blueButton.style.backgroundColor = blueColor
     
 }

 let validarCampoVazio = () => {
     let campo = document.getElementsByTagName('input')
     for (let i = 0; i < campo.length; i++) {
         if (!campo[i].value) {
             campo[i].value = 0
         }
     }
 }


 let funcaoCopiarRGB = () => {
    const textToCopy = body.style.backgroundColor || getComputedStyle(body).backgroundColor;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert("Copiado com sucesso: " + textToCopy);
        })
        .catch((error) => {
            console.error("Erro ao copiar para a área de transferência:", error);
            alert("Erro ao copiar para a área de transferência. Tente novamente.");
        });
}


 let limparCampos = () => {
     let campo = document.getElementsByTagName('input')
     for (let i = 0; i < campo.length; i++) {
         if (campo[i].value) {
             campo[i].value = 255
             colorirGreen(255)
             colorirBlue(255)
             colorirRed(255)
             colorirBody(255, 255, 255)
             campo[i].value = ""
         }
     }
 }

 inputSliderGreen.oninput = (() => {
     let value = inputSliderGreen.value;
     let greenColor = `rgb(0,${value},0)`
     let R, G, B
     inputSliderGreen.style.background = greenColor
     valueRightGreen.style.color = greenColor
     valueLeftGreen.style.color = greenColor
     greenText.value = value
     validarCampoVazio()
     R = redText.value
     G = greenText.value
     B = blueText.value
     colorirGreen(G)
     colorirBody(R, G, B)
 });

 inputSliderBlue.oninput = (() => {
     let value = inputSliderBlue.value;
     let blueColor = `rgb(0,0,${value})`
     let R, G, B
     inputSliderBlue.style.background = blueColor
     valueRightBlue.style.color = blueColor
     valueLeftBlue.style.color = blueColor
     blueText.value = value
     validarCampoVazio()
     R = redText.value
     G = greenText.value
     B = blueText.value
     colorirBlue(B)
     colorirBody(R, G, B)
 });

 inputSliderRed.oninput = (() => {
     let value = inputSliderRed.value;
     let redColor = `rgb(${value},0,0)`
     let R, G, B
     inputSliderRed.style.background = redColor
     valueRightRed.style.color = redColor
     valueLeftRed.style.color = redColor
     redText.value = value
     validarCampoVazio()
     R = redText.value
     G = greenText.value
     B = blueText.value
     colorirRed(R)
     colorirBody(R, G, B)
 });