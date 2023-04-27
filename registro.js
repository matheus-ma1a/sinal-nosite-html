let email = document.querySelector(".email")
let senha = document.querySelector(".senha")
let loginButton = document.querySelector(".loginButton")
let recuperaSenha = document.querySelector('.recuperarSenha')


    function firebaseConect(){

        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyAsgIan7t-_jJekU8XMZaDWHQ_syWNyCp0",
            authDomain: "sinais-com-site.firebaseapp.com",
            projectId: "sinais-com-site",
            storageBucket: "sinais-com-site.appspot.com",
            messagingSenderId: "40033951119",
            appId: "1:40033951119:web:72574ef5fdd7f37e773ffa"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);


        firebase.auth().signInWithEmailAndPassword('matheus@gmail.com', '123456').then(res => {
            console.log('sucess', res);
        }).catch(err => {
            console.log(err);
        })

    }

    firebaseConect()

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
    window.location.href = '/index.html'
})



