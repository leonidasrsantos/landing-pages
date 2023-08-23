//Reconhecimento de login
function buttonLogin(){
    var menssagem = window.document.getElementById('avisoLoginErro')
    var usuario = window.document.getElementById('inputUsuario')
    var senha = window.document.getElementById('inputSenha')

    if(usuario.value == "" || senha.value == ""){
        menssagem.style.display = "block"
        menssagem.textContent = "Preencha as caixas acima"
    }else if(usuario.value != "usuario@gmail.com" || senha.value != "usuario123" ){
        menssagem.style.display = "block"
        menssagem.textContent = " Usuário ou Senha incorreto!"
    } else if (usuario.value === "usuario@gmail.com" && senha.value == "usuario123"){
        menssagem.style.display = "none"
        menssagem.textContent = ""
    }
}