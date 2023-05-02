const registrarBtn = document.querySelector('.registrarBtn')
const Btn1 = document.querySelector('.btn1')
const Btn2 = document.querySelector('.btn2')
const email = document.querySelector('input')

registrarBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    validar()
})

const db = firebase.firestore()

function validar(){
    
    if (validarEmail(email.value)) {
        Btn1.disabled = 'false'
        Btn1.style.opacity = '1'
        Btn2.disabled = 'false'
        Btn2.style.opacity = '1'
        const cadastradosCollentions = firebase.firestore().collections('emailsCadastrados')
        cadastradosCollentions.add(email.value)
        console.log("email valido") 
    }else{
        console.log("email invalido") 
        
    }
    
}


function validarEmail(email) {
    let emailPattern =
        /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
}