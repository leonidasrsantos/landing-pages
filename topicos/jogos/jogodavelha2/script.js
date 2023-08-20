let jogador = ''
let n = Number(0)
let validacao = false
let velha = false
let round = Number(0)
let space = window.document.querySelectorAll('div#jogo td')
let anunciante = window.document.getElementById('anunciante')
let player = window.document.querySelector('h2 span')
function escolhaX(){
    jogador = 'X'
    window.document.getElementById('introducao').style.display = 'none'
    window.document.getElementById('jogodavelha').style.display = 'block'
    player.innerText = jogador
}
function escolhaO(){
    jogador = 'O'
    window.document.getElementById('introducao').style.display = 'none'
    window.document.getElementById('jogodavelha').style.display = 'block'
    player.innerText = jogador
}

for (let pos = 0 ; pos < space.length;pos++){
    space[pos].addEventListener ('click',function(){
        player = window.document.querySelector('h2 span')
        if(validacao == false && space[pos].textContent == ''){
            n += 1
            space[pos].textContent = jogador
            ganhou()
            if(validacao == false && jogador == 'X'){jogador = 'O'}else if(validacao == false){jogador = 'X'}
            player.innerText = jogador 
        }         
    })
}

function ganhou(){
    let a = 0;let b = 1;let c = 2;  let d = 0;let f = 3;let g = 6;  let h = 0;let i = 4;let j = 8;
//Validação vertical e horizontal
    for (c; c < 9; c+=3){
        if (space[a].textContent == jogador && space[b].textContent ==jogador && space[c].textContent == jogador){
            space[a].style.color = 'red'
            space[c].style.color = 'red'
            space[b].style.color = 'red'
            anunciante.innerHTML = `O jogador <span>${jogador}</span> venceu a partida!` 
            validacao = true
            break;
        }
            a+=3;b+=3;  
    }
    for (d; d < 3; d++){
        if(space[d].textContent == jogador && space[f].textContent == jogador && space[g].textContent == jogador){
            space[g].style.color = 'red'
            space[d].style.color = 'red'
            space[f].style.color = 'red'
            anunciante.innerHTML = `O jogador <span>${jogador}</span> venceu a partida!`
            validacao = true
            break;
        }
            f++;g++;
    }
//Validação diagonal
    for (h; h < 4; h+=2){ 
        if(space[h].textContent == jogador && space[i].textContent == jogador && space[j].textContent == jogador){
            space[h].style.color = 'red'
            space[i].style.color = 'red'
            space[j].style.color = 'red'
            anunciante.innerHTML = `O jogador <span>${jogador}</span> venceu a partida!`
            validacao = true
            break;
            }
            j-=2; 
    }
//Validação velha       
    if(n == 9 && validacao == false ){
        validacao = true
        velha = true
        if(jogador == 'X'){jogador = 'O'}else{jogador = 'X'}
        anunciante.innerHTML = `A partida deu <span>EMPATE</span>!`
    }
//Config finalização de partida.
    if (validacao){
        round++
        window.document.getElementById('posJogo').style.display = 'block'
//configuração de placar
        window.document.getElementById('roundP').innerHTML += `<th>${round}º</th>`
        if(jogador == 'X' && velha == false){
            window.document.getElementById('xisP').innerHTML += '<td>✔</td>'
            window.document.getElementById('bolaP').innerHTML +='<td></td>'
        }else if(jogador == 'O' && velha == false){
            window.document.getElementById('bolaP').innerHTML +='<td>✔</td>'
            window.document.getElementById('xisP').innerHTML += '<td></td>'
        }else{
            window.document.getElementById('bolaP').innerHTML +='<td>E</td>'
            window.document.getElementById('xisP').innerHTML += '<td>E</td>'
            velha = false
        }
    }
}
function recomeçar(){
    n = 0
    validacao = false
    window.document.getElementById('posJogo').style.display = 'none'
    anunciante.innerHTML = `Agora é a vez do <span>${jogador}</span>`
    for (let pos = 0 ; pos < space.length;pos++){
        space[pos].style.color = 'blue'
        space[pos].innerText = ''
    }
}    