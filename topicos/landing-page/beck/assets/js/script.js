let itens = window.document.getElementById('listaNav')
function widthSize(){
    if (window.innerWidth >= 660){
        
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

function menuBurguer(){
    let nav = window.document.getElementById('listaNav')
    if(nav.style.display == 'none'){
        nav.style.display = 'block'
    }else{
        nav.style.display = 'none'
    }
}

