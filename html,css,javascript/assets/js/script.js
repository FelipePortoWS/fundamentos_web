let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

let nomeOK = false
let emailOK = false
let assuntoOK = false

let mapa = document.querySelector("#mapa")

nome.style.width = "30%"
email.style.width = "30%"

function validaNome(){
    let txt = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txt.innerHTML = "Nome inválido"
        txt.style.color = "red"
        nomeOK = false
    } else {
        txt.innerHTML = "Nome válido"
        txt.style.color = "green"
        nomeOK = true
    }

}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.color = "red"
        emailOK = false
    } else {
        txtEmail.innerHTML = "Email válido"
        txtEmail.style.color = "green"
        emailOK = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "Limite de 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
        assuntoOK = false
    } else {
        txtAssunto.style.display = "none"
        assuntoOK = true
    }
}

function enviar(){
    if(nomeOK == true && emailOK == true && assuntoOK == true){
        alert("Formulário enviado com sucesso")
    } else {
        alert("Preencha o formulário corretamente")
    }
}

function mapaZoomIn(){
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaZoomOut(){
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}