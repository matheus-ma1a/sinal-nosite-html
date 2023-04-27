let email = document.querySelector(".email")
let senha = document.querySelector(".senha")
let loginButton = document.querySelector(".loginButton")
let recuperaSenha = document.querySelector('.recuperarSenha')
let registrarButton = document.querySelector('.btn-registrar-form')



function login() {
    firebase.auth().signInWithEmailAndPassword(email.value, senha.value).then(res => {
        window.location.href = '/jogo.html'
    }).catch(error => {

        getErrorMessage(error)

    })

}

function recoverPassword() {
    firebase.auth().sendPasswordResetEmail(email.value).then(() => {
        alert('Email de recuperacao enviado com sucesso!')
    }).catch((error) => {

        getErrorMessage(error)

    })
}

function getErrorMessage(error) {

    if (error.code == 'auth/user-not-found') {
        alert('Usuario nao encontrado, Faca o registro!')
    }

    if (error.code == 'auth/wrong-password') {
        alert('Senha invalida')
    }

    return error.message

}


function validar() {

    const emailValido = email_Valida()
    recuperaSenha.disabled = !emailValido

    if (!emailValido) {
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

loginButton.addEventListener('click', (e) => {
    e.preventDefault()
    login()
})

recuperaSenha.addEventListener('click', (e) => {
    e.preventDefault()
    recoverPassword()
})

registrarButton.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href = '/registro/registro.html'

})