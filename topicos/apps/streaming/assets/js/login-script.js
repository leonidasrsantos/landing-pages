

function buttonLogin(){
    var menssagem = window.document.getElementById('avisoLoginErro')
    var usuario = window.document.getElementById('inputUsuario')
    var senha = window.document.getElementById('inputSenha')

    if(usuario.value == "" || senha.value == ""){
        menssagem.textContent = "Parece que está faltando algo"
    }else if(usuario.value != "usuario@gmail.com" || senha.value != "usuario123" ){
        menssagem.textContent = "Parece que o Usuário ou a Senha está incorreto!"
    } else if (usuario.value === "usuario@gmail.com" && senha.value == "usuario123"){
    
    }
}