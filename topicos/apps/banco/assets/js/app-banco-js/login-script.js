// Variaveis Globais ---------------------------------------------------------
let authStatus = Boolean
let idOn = String
let CPF = window.document.getElementById("inpCPF")
let SENHA = window.document.getElementById("password")

// Variaveis captação dados de usuario ---------------------------------------
let nome = String
let cpf = String
let email = String
let nomeCompleto = String
let nomeUsuario = String
let saldo = Number
let transferencias = []
let recebimentos = []

// Variaveis de display's ----------------------------------------------------
let telaLogin = window.document.querySelector(".app-banco-login")




// Configuração do input de CPF aceitação de apenas numeros e X----------------
CPF.addEventListener("keydown", function (teclado) {

    let tecla = Number(teclado.key)
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    if (teclado.key != numbers.indexOf(tecla) && teclado.key.toUpperCase() != "X" && teclado.key != 'Backspace') {
        teclado.preventDefault()
    }

    if (CPF.value.length == 3 && teclado.key != "Backspace" || CPF.value.length == 7 && teclado.key != "Backspace") {
        CPF.value += "."
    }

    if (CPF.value.length == 11 && teclado.key != "Backspace") {
        CPF.value += "-"
    }
})

// Autenticação de Login utilizado um "Banco de dados" integrado no html--------
function loginUser() {

    let loginCpf = CPF
    let buscarID = String
    let senhaN = String
    let buscaUser = window.document.querySelectorAll("#bancodedados > div > #cpf")

    for (let i = 0; i <= buscaUser.length; i++) {

        if (loginCpf.value == buscaUser[i].textContent) {
            buscarID = buscaUser[i].parentElement.getAttribute("id")
            senhaN = window.document.querySelector(`#${buscarID}  #senha`)
            break
        }
    }

    if (senhaN.textContent === SENHA.value) {
        authStatus = true
        idOn = buscarID
        carregarVariaveis()
        telaLogin.style.display = 'none'
        telaLogin.style.visibility = 'hidden'
        telaLogin.style.opacity = '0'
    } else {
        authStatus = false
        idOn = ""
    }
    /*console.log(loginCpf.value)
    console.log(buscaUser)
    console.log(buscarID)
    console.log(senhaN.textContent)
    console.log(SENHA.value)
    console.log(authStatus)
    console.log(idOn)*/
}

//Função para pegar os dados do usuario que foi logado-------------------
function carregarVariaveis() {
    
     cpf = window.document.querySelector (`#${idOn} #cpf`)
     email = window.document.querySelector (`#${idOn} #e-mail`)
     nomeCompleto = window.document.querySelector (`#${idOn} #nomeCompleto`)
     nomeUsuario = window.document.querySelector (`#${idOn} #nomeUser`)
     saldo = window.document.querySelector (`#${idOn} #saldo`)
     transferencias = window.document.querySelector (`#${idOn} #transferencias`)
     recebimentos = window.document.querySelector (`#${idOn} #recebimentos`)
}