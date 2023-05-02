const grid = document.querySelector('.grid')
const button = document.querySelector('.geraSinal')
const horas = document.querySelector('.horas')
const minutos = document.querySelector('.minutos')
const wapper_hora = document.querySelector(".wapper-hora");
const acessaBtn = document.querySelector(".acessarJogoBtn");
const body = document.querySelector('body')
const iframe = document.querySelector('iframe')



const circulosEstrelas = [
    '/imgs/circulo.svg front', '/imgs/circulo.svg front', '/imgs/star.svg back', '/imgs/circulo.svg front', '/imgs/circulo.svg front',

    '/imgs/circulo.svg front', '/imgs/star.svg back', '/imgs/circulo.svg front', '/imgs/circulo.svg front', '/imgs/circulo.svg front',

    '/imgs/circulo.svg front', '/imgs/star.svg back', '/imgs/circulo.svg front', '/imgs/circulo.svg front', '/imgs/star.svg back',

    '/imgs/circulo.svg front', '/imgs/circulo.svg front', '/imgs/star.svg back', '/imgs/circulo.svg front', '/imgs/circulo.svg front',
    
    '/imgs/circulo.svg front', '/imgs/circulo.svg front', '/imgs/circulo.svg front', '/imgs/star.svg back', '/imgs/circulo.svg front',
]


function cronometro (){
    const tempoTotal = 180;
    
    let tempoRestante = tempoTotal;
    
    const atualizarContador = () => {

      const minutos = Math.floor(tempoRestante / 60);
      const segundos = tempoRestante % 60;

      wapper_hora.innerHTML = `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;

      tempoRestante--;
    
      if (tempoRestante < 0) {
        clearInterval(intervalId);
        wapper_hora.innerHTML = "00:00"; 
      }
    };
    
    const intervalId = setInterval(atualizarContador, 1000);
    
}

function horasMinutos() {
    var currentDate = new Date();
    currentDate.setHours(currentDate.getHours());
    currentDate.setMinutes(currentDate.getMinutes() + 3);
    let hours = String(currentDate.getHours()).padStart(2, "0")
    let minutes = String(currentDate.getMinutes()).padStart(2, "0")

    const horamin = {
        horas: hours,
        minutos: minutes
    }

    return (horamin)
}

const loadSinal = () => {
    const arrayEmbaralhado = circulosEstrelas.sort(() => Math.random() - 0.5)

    grid.innerHTML = ''

    setTimeout(() => {
        circulosEstrelas.forEach((item, index) => {

            const classname = arrayEmbaralhado[index].split(' ')

            grid.innerHTML += `
            <div class="card">
            <div class="face ${classname[1]}" >
            <img src="${classname[0]}" >
            </div>
            </div>
            `
        })

    },)

}

const preLoad = () => {
    arrayPre = [...circulosEstrelas]

    arrayPre.forEach((item, index) => {

        const classname = arrayPre[0].split(' ')

        grid.innerHTML += `
        <div class="card">
        <div class="face ${classname[1]}" >
            <img src="${classname[0]}" >
        </div>
    </div>`
    })
}

preLoad()

function hadilitaBotao(){
    setTimeout(()=>{
        button.removeAttribute("disabled")
        button.style.backgroundColor = '#05a532'

    },180000)
}

function desabilitaBotao(){

    button.setAttribute("disabled", "disabled");
    button.style.backgroundColor = '#C80505'
    button.textContent = 'SINAL HAKEADO'
}

button.addEventListener('click', (e) => {
    e.preventDefault()
    loadSinal()
    cronometro ()
    cronometro ()
    desabilitaBotao()
    hadilitaBotao()
})

acessaBtn.addEventListener('click',(e)=>{
    e.preventDefault()

    iframe.setAttribute('src','https://zep.bet/casino/spribe-mines')
    iframe.setAttribute('frameborder','0')
    iframe.setAttribute('sandbox','allow-same-origin allow-scripts allow-popups allow-forms')

})