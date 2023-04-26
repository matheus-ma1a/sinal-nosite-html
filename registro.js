let email = document.querySelector(".email")
let senha = document.querySelector(".senha")
let loginButton = document.querySelector(".loginButton")
let recuperaSenha = document.querySelector('.recuperarSenha')


function validar() {

    const emailValido = email_Valida()
    recuperaSenha.disabled = !emailValido

    if(!emailValido){
        alert('email invalido tente novamente')
    }

    const senhaValido = senha_Valida()
    loginButton.disabled = !senhaValido || !emailValido
}

function email_Valida() {
    if (!email.value) {
        return false
    }

    return validarEmail(email.value)
}

function senha_Valida() {
    if (!senha.value) {
        return false
    }

    return true
}

function validarEmail(email) {
    let emailPattern =
        /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
}

loginButton.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href = '/index.html'
})

