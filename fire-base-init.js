// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
// import { getFirestore, doc, collection, addDoc, query, where, getDocs} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// const firebaseApp = initializeApp({
//     apiKey: "AIzaSyAsgIan7t-_jJekU8XMZaDWHQ_syWNyCp0",
//     authDomain: "sinais-com-site.firebaseapp.com",
//     projectId: "sinais-com-site",
//     storageBucket: "sinais-com-site.appspot.com",
//     messagingSenderId: "40033951119",
//     appId: "1:40033951119:web:72574ef5fdd7f37e773ffa"
// })
// const db = getFirestore(firebaseApp)
// const minhacolecao = collection(db, 'emails')

const registrarBtn = document.querySelector('.registrarBtn')
const email = document.querySelector('input')
const error = document.querySelector('.error')



registrarBtn.addEventListener('click', (e) => {
    e.preventDefault()
    validar()
})

function insereUsuarioNaPlanilha(email) {

    console.log('dentro do fetch'),
    fetch('https://api.sheetmonkey.io/form/qYWn6XeuNdnJXic3YveDfH', {


        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email}),
    }).then((result) => {
        window.location.href = './home/Dashboard.html'
    });
}

function validar() {

    if (validarEmail(email.value)) {
        
        insereUsuarioNaPlanilha(email.value)
        console.log("email valido")
        error.style.opacity = '0'
        error.style.display = 'none'
    } else {
        error.style.opacity = '1'
        error.style.display = 'flex'
    }

}

function validarEmail(email) {
    let emailPattern =
        /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
}

// async function insereDocumento(email) {
//     await addDoc(minhacolecao, { email: email })
// }

