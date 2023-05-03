const grid = document.querySelector('.grid')
const geraSinal = document.querySelector('.geraSinal')
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


function cronometro() {
    const tempoTotal = 20;

    let tempoRestante = tempoTotal;

    const atualizarContador = () => {

        const minutos = Math.floor(tempoRestante / 60);
        const segundos = tempoRestante % 60;

        wapper_hora.innerHTML = `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;

        tempoRestante--;

        if (tempoRestante < 0) {
            clearInterval(intervalId);
            wapper_hora.innerHTML = "00:00";
            hadilitaBotao()
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



}

const preLoad = () => {
    arrayPre = [...circulosEstrelas]

    grid.innerHTML = ''

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

function hadilitaBotao() {
    setTimeout(() => {
        geraSinal.removeAttribute("disabled")
        geraSinal.style.backgroundColor = '#05a532'
        preLoad()
    }, )
}

function desabilitaBotao() {

    geraSinal.setAttribute("disabled", "disabled");
    geraSinal.style.backgroundColor = '#C80505'
    geraSinal.textContent = 'SINAL HAKEADO'
}

geraSinal.addEventListener('click', (e) => {
    e.preventDefault()
    loadSinal()
    cronometro()
    desabilitaBotao()
})
console.log(circulosEstrelas);

acessaBtn.addEventListener('click', (e) => {
    e.preventDefault()

    iframe.setAttribute('src', 'https://zep.bet/casino/spribe-mines')
    iframe.setAttribute('frameborder', '0')
    iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms')

})