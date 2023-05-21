function menuBurguer(){
    let nav = window.document.getElementById('listaNav')
    if(nav.style.display == 'none'){
        nav.style.display = 'block'
    }else{
        nav.style.display = 'none'
    }
}