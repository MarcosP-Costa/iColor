 let botao = document.getElementById('botao')
 let botaoAleatorio = document.getElementById('allRandom')
 let redCircle = document.getElementById('redCircle')
 let blueCircle = document.getElementById('blueCircle')
 let greenCircle = document.getElementById('greenCircle')
 let redButton = document.getElementById('redButton')
 let blueButton = document.getElementById('blueButton')
 let greenButton = document.getElementById('greenButton')

 //transformar essas personalizações em funções

 botao.addEventListener('click', event => {
     event.preventDefault()
     let randomRed = redRandom()
     redCircle.style.fill = randomRed
     redButton.style.backgroundColor = randomRed
 })
 botaoAleatorio.addEventListener('click', event => {
     event.preventDefault()
     let randomRed = "#" + redRandom()
     redCircle.style.fill = randomRed
     redButton.style.backgroundColor = randomRed
     let randomblue = "#" + blueRandom()
     blueCircle.style.fill = randomblue
     blueButton.style.backgroundColor = randomblue
     let randomgreen = "#" + greenRandom()
     greenCircle.style.fill = randomgreen
     greenButton.style.backgroundColor = randomgreen
 })

 redButton.addEventListener('click', event => {
     event.preventDefault()
     let randomRed = "#" + redRandom()
     redCircle.style.fill = randomRed
     redButton.style.backgroundColor = randomRed
 })

 blueButton.addEventListener('click', event => {
    event.preventDefault()
    let randomblue = "#" + blueRandom()
    blueCircle.style.fill = randomblue
    blueButton.style.backgroundColor = randomblue
})

greenButton.addEventListener('click', event => {
    event.preventDefault()
    let randomgreen = "#" + greenRandom()
    greenCircle.style.fill = randomgreen
    greenButton.style.backgroundColor = randomgreen
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

 let redRandom = () => {
     let randomHex = convertToHex(randomNumber(), randomNumber())
     return randomHex + "0000"
 }
 let greenRandom = () => {
    let randomHex = convertToHex(randomNumber(), randomNumber())
    return "00" + randomHex + "00"
}
 let blueRandom = () => {
     let randomHex = convertToHex(randomNumber(), randomNumber())
     return "0000" + randomHex 
 }
