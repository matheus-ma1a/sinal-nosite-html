import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore, doc, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAsgIan7t-_jJekU8XMZaDWHQ_syWNyCp0",
    authDomain: "sinais-com-site.firebaseapp.com",
    projectId: "sinais-com-site",
    storageBucket: "sinais-com-site.appspot.com",
    messagingSenderId: "40033951119",
    appId: "1:40033951119:web:72574ef5fdd7f37e773ffa"
})

const registrarBtn = document.querySelector('.registrarBtn')
const Btn1 = document.querySelector('.btn1')
const Btn2 = document.querySelector('.btn2')
const email = document.querySelector('input')

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const documento = doc(db, 'emails/usuario')
const minhacolecao = collection(db, 'emails')

registrarBtn.addEventListener('click', (e) => {
    e.preventDefault()
    validar()

})

Btn2.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = '/jogo/jogo.html'
})

Btn1.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = '/jogo/jogo.html'
})

function validar() {

    if (validarEmail(email.value)) {
        Btn1.disabled = false
        Btn1.style.opacity = '1'
        Btn2.disabled = false
        Btn2.style.opacity = '1'
        email.style.display = 'none'
        registrarBtn.style.display = 'none'
        insereDocumento(email.value)
        console.log("email valido")
    } else {
        console.log("email invalido")
    }

}

function validarEmail(email) {
    let emailPattern =
        /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
}

async function insereDocumento(email) {
    await addDoc(minhacolecao, { email: email })
}

// onAuthStateChanged(auth, (user)=>{
//     if(user != null) {
//         console.log('sem usuario');
//     }else{
//     console.log('nao logado');
//     }
// })
