
var n0 = Number(window.document.getElementById('number0').value)
var n1 = Number(window.document.getElementById('number1').value)
var n2 = Number(window.document.getElementById('number2').value)
var n3 = Number(window.document.getElementById('number3').value)
var n4 = Number(window.document.getElementById('number4').value)
var n5 = Number(window.document.getElementById('number5').value)
var n6 = Number(window.document.getElementById('number6').value)
var n7 = Number(window.document.getElementById('number7').value)
var n8 = Number(window.document.getElementById('number8').value)
var n9 = Number(window.document.getElementById('number9').value)
var tela = window.document.getElementById('txtn')
var tela2 = window.document.getElementById('setnumberAnt2')
var ope = window.document.getElementById('operador')
function numero1(){
    tela.value += n1 
}
function numero2(){
    tela.value += n2
}
function numero3(){
    tela.value += n3
}
function numero4(){
    tela.value += n4
}
function numero5(){
    tela.value += n5
}
function numero6(){
    tela.value += n6
}
function numero7(){
    tela.value += n7
}
function numero8(){
    tela.value += n8
}
function numero9(){
    tela.value += n9
}
function numero0(){
    tela.value += n0
}

//Funções de calculos

function soma(){
    if(tela2.textContent ==''){
        tela2.innerHTML = tela.value
        tela.value= ""
    }
    ope.innerText= '+'
}
function menos(){
    if(tela2.textContent ==''){
        tela2.innerHTML = tela.value
        tela.value= ""
    }
    ope.innerText= '-'
}


function multiplicar(){
    if(tela2.textContent ==''){
        tela2.innerHTML = tela.value
        tela.value= ""
    }
    ope.innerText= 'x'
}

function divisao(){
    if(tela2.textContent ==''){
        tela2.innerHTML = tela.value
        tela.value= ""
    }
    ope.innerText= '÷'
}
function calcular(){
    var nu1 = Number(tela.value)
    var nu2 = Number(tela2.value)

    switch (ope.textContent){
        case '+':
            var s = nu1 + nu2
    ope.innerText= '+'
    tela2.innerHTML = s
    tela.value= ""
            break
        case '-':
            var s = nu2 - nu1
    ope.innerText= '-'
    tela2.innerHTML = s
    tela.value= ""
            break
        case 'x':
            var s = nu1 * nu2
        ope.innerText= 'x'
        tela2.innerHTML = s
        tela.value= ""
            break
        case '÷':
            var s = nu2 / nu1
        ope.innerText= '÷'
        tela2.innerHTML = s
        tela.value= ""
            break
    }
    
}



//funções extras
function delet(){
    tela2.innerHTML=""
    tela.value=""
    ope.innerHTML=""
}
function on(){
    var telinha = window.document.getElementById('tela')
    var circle = window.document.getElementById('circle')
    if (telinha.value == 1){
        telinha.style.backgroundColor = '#323232'
        telinha.style.boxShadow ='0px 0px 40px black inset'
        tela.style.display = 'none'
        ope.style.display = 'none'
        tela2.style.display = 'none'
        circle.style.backgroundColor = '#000000'
        telinha.value = 0
        tela2.innerHTML = ''
        tela.value = ''
        ope.innerHTML= ''
    }else{
        tela.style.display = 'inline'
        ope.style.display = 'inline'
        tela2.style.display = 'block'
        telinha.style.backgroundColor = '#ffffff'
        telinha.style.boxShadow = 'none'
        circle.style.backgroundColor = '#a6e822'
        telinha.value = 1  
        tela2.innerHTML = ''
        tela.value = ''
        ope.innerHTML = ''
    }
}
