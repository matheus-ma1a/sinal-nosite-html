const email = document.querySelector('.email')
const senha = document.querySelector('.senha-input')
const confirme_senha = document.querySelector(".confirme-a-senha")
const erro_email = document.querySelector(".erro-email")
const erro_senha = document.querySelector(".erro-senha")
const erro_senha_confirma = document.querySelector(".erro-senha-confirma")
const butaoRegistrar = document.querySelector(".butao-registrar")

senha.addEventListener('change', () => {
    onChangePassword()
})

confirme_senha.addEventListener('change', () => {
    onChangePasswordConfirm()
})

butaoRegistrar.addEventListener('click',(e)=>{
    e.preventDefault()
    registrar()
})

function validarEmail(email) {
    let emailPattern =
        /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
}

function onChangeEmail() {

    erro_email.style.display = validarEmail(email.value) ? "none" : "block"
    toggleRegisterButton()
}

function onChangePassword() {

    const tamanhoSenha = senha.value

    erro_senha.style.display = tamanhoSenha.length >= 6 ? "none" : "block"

    const primeiraSenha = senha.value
    const segundaSenha = confirme_senha.value
    erro_senha_confirma.style.display = primeiraSenha == segundaSenha ? "none" : "block"
    toggleRegisterButton()
}

function onChangePasswordConfirm() {
    const primeiraSenha = senha.value
    const segundaSenha = confirme_senha.value
    erro_senha_confirma.style.display = primeiraSenha == segundaSenha ? "none" : "block"
    toggleRegisterButton()
}

email.addEventListener('change', () => {
    onChangeEmail()
})

function toggleRegisterButton() {
    butaoRegistrar.disabled = !isFormValid()
}

function isFormValid (){
    const email_valid = email.value
    if(!email_valid || !validarEmail(email_valid)) {

        return false
    }

    const senha_valid = senha.value

    if(!senha_valid || senha_valid < 6 ) {

        return false
    }

    const confirme_senha_valid = confirme_senha.value

    if( senha_valid != confirme_senha_valid ) {

        return false
    }

    return true
}

function registrar(){
    const emailValor = email.value
    const senhaValor = senha.value
    firebase.auth().createUserWithEmailAndPassword(emailValor,senhaValor).then(()=>{
        window.location.href = '../jogo.html'
    })
}

