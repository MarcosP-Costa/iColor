let inputSliderBlue = document.getElementById("inputBlue");
let valueRightBlue = document.getElementById("vrBlue");
let valueLeftBlue = document.getElementById("vlBlue");


let slider = {
    blue: {
        a: 1,
        b: 2
    }
}


inputSliderBlue.oninput = (() => {
    let value = inputSliderBlue.value;
    let B = `rgb(0,0,${value})`
    inputSliderBlue.style.background = B
    valueRightBlue.style.color = B
    valueLeftBlue.style.color = B
    console.log(slider.blue.a);
});


//continuar em casa, basicamente tentar fazer um mega objeto com essas variaveis e usar, depois fazer toda a integração do slider com os botoes e campos de texto
//depois arrumar os botoes e postar