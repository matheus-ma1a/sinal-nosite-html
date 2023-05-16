const grid = document.querySelector('.grid')
const geraSinal = document.querySelector('.geraSinal')
const horas = document.querySelector('.horas')
const minutos = document.querySelector('.minutos')
const wapper_hora = document.querySelector(".wapper-hora");
const acessaBtn = document.querySelector(".acessarJogoBtn");
const textAcessaBtn = document.querySelector(".textAcessarbtn");
const body = document.querySelector('body')
const iframe = document.querySelector('iframe')

const circulosEstrelas = [
    '/imgs/circulo.svg front', '/imgs/circulo.svg front', '/imgs/star.svg back', '/imgs/circulo.svg front', '/imgs/circulo.svg front',

    '/imgs/circulo.svg front', '/imgs/star.svg back', '/imgs/circulo.svg front', '/imgs/circulo.svg front', '/imgs/circulo.svg front',

    '/imgs/circulo.svg front', '/imgs/star.svg back', '/imgs/circulo.svg front', '/imgs/circulo.svg front', '/imgs/star.svg back',

    '/imgs/circulo.svg front', '/imgs/circulo.svg front', '/imgs/star.svg back', '/imgs/circulo.svg front', '/imgs/circulo.svg front',

    '/imgs/circulo.svg front', '/imgs/circulo.svg front', '/imgs/circulo.svg front', '/imgs/star.svg back', '/imgs/circulo.svg front',
]


function animacaoDeCarregamento(){

    const div = document.createElement('div')
    div.className = 'carregamento'
    textAcessaBtn.style.display = 'none'
    acessaBtn.appendChild(div)
    setTimeout(()=>{
        textAcessaBtn.style.display = 'block'
        div.className = ''
    },5000)

}

function cronometro() {
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
    const arrayfixo = [...circulosEstrelas]
    
    const arrayEmbaralhado = arrayfixo.sort(() => Math.random() - 0.5)
    
    grid.innerHTML = ''
    
    arrayfixo.forEach((item, index) => {
        
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
    
    grid.innerHTML = ''

    circulosEstrelas.forEach((item, index) => {

        const classname = circulosEstrelas[0].split(' ')

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
        geraSinal.innerHTML = 'HACKER SINAL'
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

acessaBtn.addEventListener('click', (e) => {
    e.preventDefault()
    animacaoDeCarregamento()
    iframe.setAttribute('src', 'https://go.aff.afiliadoszep.bet/nwqi44vj?utm_campaign=appminedireta')
    iframe.setAttribute('frameborder', '0')
    iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms')

})