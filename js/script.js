 let botao = document.getElementById('botao')
 let botaoAleatorio = document.getElementById('allRandom')
 let redCircle = document.getElementById('redCircle')
 let blueCircle = document.getElementById('blueCircle')
 let greenCircle = document.getElementById('greenCircle')
 let redButton = document.getElementById('redButton')
 let blueButton = document.getElementById('blueButton')
 let greenButton = document.getElementById('greenButton')
 let body = document.getElementsByTagName('body')[0]




 //transformar essas personalizações em funções

 botao.addEventListener('click', event => {
    event.preventDefault()
/*     let R, G, B
    R = hexadecimal()
    G = hexadecimal()
    B = hexadecimal()
    colorirRed(R)
    colorirGreen(G)
    colorirBlue(B)
    colorirBody(R, G, B) */

    for(let i = 1; i <= 100; i++){
        console.log(randomNumber());
    }
 })

 botaoAleatorio.addEventListener('click', event => {
     event.preventDefault()
     colorirRed(hexadecimal())
     colorirBlue(hexadecimal())
     colorirGreen(hexadecimal())
 })

 redButton.addEventListener('click', event => {
     event.preventDefault()
    colorirRed(hexadecimal())
 })

 blueButton.addEventListener('click', event => {
    event.preventDefault()
    colorirBlue(hexadecimal())
})

greenButton.addEventListener('click', event => {
    event.preventDefault()
    colorirGreen(hexadecimal())
})

 //Hexadecimal = RR GG BB

 let randomNumber = () => { //gera um numero aleatorio de 0 a 15
     let min = Math.ceil(0)
     let max = Math.floor(16)
     return Math.floor(Math.random() * (max - min)) + min;
 }

 let convertToHex = (numA, numB) => { //converte numeros decimais de 10 a 15 em seus valores hexadecimais

     switch (numA) {
         case 10:
             firstValue = "A"
             break;
         case 11:
             firstValue = "B"
             break;
         case 12:
             firstValue = "C"
             break;
         case 13:
             firstValue = "D"
             break;
         case 14:
             firstValue = "E"
             break;
         case 15:
             firstValue = "F"
             break;
         default:
             firstValue = numA.toString()
     }
     switch (numB) {
         case 10:
             secondValue = "A"
             break;
         case 11:
             secondValue = "B"
             break;
         case 12:
             secondValue = "C"
             break;
         case 13:
             secondValue = "D"
             break;
         case 14:
             secondValue = "E"
             break;
         case 15:
             secondValue = "F"
             break;
         default:
             secondValue = numB.toString()
     }
     return firstValue + secondValue
 }

 let hexadecimal = () => { //returna 2 valores hexadecimais
    let randomHex = convertToHex(randomNumber(), randomNumber())
    return randomHex 
}

let colorirBody = (R, G, B) => {//colore o body
    let RGB = "#"+R+G+B
    console.log(RGB);
    body.style.backgroundColor = RGB
}

let colorirRed = (R) => {
    let redHex = "#" + R + "0000"
    redCircle.style.fill = redHex
    redButton.style.backgroundColor = redHex
    console.log("Red color is: " + R);
}

let colorirGreen = (G) => {
    let greenHex = "#00" + G + "00"
    greenCircle.style.fill = greenHex
    greenButton.style.backgroundColor = greenHex
    console.log("Green color is: " + G);
}

let colorirBlue = (B) => {
    let blueHex = "#0000" + B
    blueCircle.style.fill = blueHex
    blueButton.style.backgroundColor = blueHex
    console.log("Blue color is: " + B);
}