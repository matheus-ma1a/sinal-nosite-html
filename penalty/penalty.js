const contetnSinal = document.querySelector('.contetnSinal')
const div1 = document.querySelector('.div1')
const div2 = document.querySelector('.div2')
const div3 = document.querySelector('.div3')
const div4 = document.querySelector('.div4')
const div5 = document.querySelector('.div5')
const bandeiras = document.querySelector('.bandeiras')
const button = document.querySelector('.myButton1')
const button2 = document.querySelector('.myButton2')
const iframe = document.querySelector('iframe')
const textAcessaBtn = document.querySelector('.textAcessarbtn')
const timer = document.querySelector('.timer')

const clases = ['card','card','card','card','bola']
const bandeirasArray = ['🇹🇷', '🇮🇹', '🇳🇱', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', '🇺🇦', '🇭🇷', '🇵🇱', '🇵🇹', '🇲🇫', '🇨🇭', '🇪🇸', '🇧🇪', '🇦🇹', '🇮🇪', '🇨🇿', '🇩🇪', '🇦🇿', '🇩🇰', '🇫🇮', '🇷🇸', '🇺🇿', '🏴󠁧󠁢󠁳󠁣󠁴󠁿', '🇸🇪', '🇦🇱',]

function criaElemento () {

    const arrayfixo = [...clases]

    const arrayEmbaralhado = arrayfixo.sort(() => Math.random() - 0.5)
    
    arrayEmbaralhado.forEach((clase, index) => {
        contetnSinal.innerHTML = `
        <div class="waper gap">
            <div class="div1 ${arrayEmbaralhado[0]} " ></div>
            <div class="div2 ${arrayEmbaralhado[1]} " ></div>
        </div>

            <div class="div3 ${arrayEmbaralhado[2]} " ></div>

        <div class="wapper2 gap">
            <div class="div4 ${arrayEmbaralhado[3]} " ></div>
            <div class="div5 ${arrayEmbaralhado[4]} " ></div>
        </div>
        `
    })
    
}

function preLoad() {
    const arrayfixo = [...clases]

    
    arrayfixo.forEach((clase, index) => {
        contetnSinal.innerHTML = `
        <div class="waper gap">
            <div class="div1 ${arrayfixo[0]} " ></div>
            <div class="div2 ${arrayfixo[0]} " ></div>
        </div>

            <div class="div3 ${arrayfixo[0]} " ></div>

        <div class="wapper2 gap">
            <div class="div4 ${arrayfixo[0]} " ></div>
            <div class="div5 ${arrayfixo[0]} " ></div>
        </div>
        `
    })

    bandeiras.src = ''
}

function mudaBandeira (){

    const arrayfixo = [...bandeirasArray]
    
    const arrayEmbaralhado = arrayfixo.sort(() => Math.random() - 0.5)
    
    arrayEmbaralhado.forEach((flag, index)=>{
        bandeiras.src = ''
        bandeiras.src = `./flags/${flag}.svg`
    })


}

function animacaoDeCarregamento(){

    console.log('to aqui')

    const div = document.createElement('div')
    div.className = 'carregamento'
    textAcessaBtn.style.display = 'none'
    button2.appendChild(div)
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

        timer.innerHTML = `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;

        tempoRestante--;

        if (tempoRestante < 0) {
            clearInterval(intervalId);
            timer.innerHTML = "00:00";
            hadilitaBotao()
        }
    };

    const intervalId = setInterval(atualizarContador, 1000);

}

function desabilitaBotao() {

    button.setAttribute("disabled", "disabled");
    button.style.backgroundColor = '#C80505'
    button.textContent = 'SINAL HAKEADO'
}

function hadilitaBotao() {
    setTimeout(() => {
        button.removeAttribute("disabled")
        button.style.backgroundColor = '#05a532'
        button.innerHTML = 'HACKER SINAL'
        preLoad()
    }, )
}

button2.addEventListener('click',(e)=>{
    e.preventDefault()
    animacaoDeCarregamento()
    iframe.setAttribute('src', 'https://zep.bet/casino/9550-penaltyshootout')
})

button.addEventListener('click',(e)=>{
    e.preventDefault()
    desabilitaBotao()
    criaElemento ()
    mudaBandeira ()
    cronometro()
})