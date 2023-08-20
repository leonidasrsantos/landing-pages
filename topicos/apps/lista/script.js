var anoatual = new Date()

function mudarHora(){
    let saida = window.document.getElementById('outData')
    let dh = new Date()
    var hora = dh.getHours().toString().padStart(2, '0');
    var minuto = dh.getMinutes().toString().padStart(2, '0');
    var dia = dh.getDate().toString().padStart(2, '0');
    var mes = (dh.getMonth() + 1).toString().padStart(2, '0');
    saida.innerHTML = `${dia}/${mes}/${dh.getFullYear()} | ${hora}:${minuto}`

}
var intervalo = setInterval(mudarHora,1000)

function addTarefa(){
    window.document.getElementById('addTarefa').style.display = 'block'
}
function novatarefa(){
    var campo = document.getElementById('dataehora') 
    var data = new Date(campo.value)
    var ano = data.getFullYear()
    var hora = data.getHours() 
    var minuto = data.getMinutes()

    var titulo = window.document.getElementById('tTitulo')
    var tarefa = window.document.getElementById('tarefa')
    var lista = window.document.querySelector('section#tarefas ul')
    var li = window.document.createElement('li')
    
    
    if(titulo.value == ''){
        window.alert('Preencha o título')
    }else if ( ano < anoatual.getFullYear()){
       window.alert('Ops...Parece que houve algum erro na data.')
    }else if(tarefa.value == ''){
        window.alert('Ops...Parece que esqueceu de anotar uma tarefa!')
    }
    else{
        li.innerHTML = `<h3>${titulo.value}</h3> <i class="material-icons">more_vert</i> <h4>${hora}:${minuto}</h4> <hr> <p>${tarefa.value}</p>`

        lista.appendChild(li)
        window.document.getElementById('addTarefa').style.display = 'none'
    }

    titulo.value = ''
    campo.value = ''
    tarefa.value = ''
}