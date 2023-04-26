const grid = document.querySelector('.grid')
const button = document.querySelector('button')


const circulosEstrelas = [
    '/imgs/circulo.svg front', '/imgs/circulo.svg front', '/imgs/star.svg back', '/imgs/circulo.svg front', '/imgs/circulo.svg front',

    '/imgs/circulo.svg front', '/imgs/star.svg back', '/imgs/circulo.svg front', '/imgs/circulo.svg front', '/imgs/circulo.svg front',

    '/imgs/circulo.svg front', '/imgs/star.svg back', '/imgs/circulo.svg front', '/imgs/circulo.svg front', '/imgs/star.svg back',

    '/imgs/circulo.svg front', '/imgs/circulo.svg front', '/imgs/star.svg back', '/imgs/circulo.svg front', '/imgs/circulo.svg front',
    
    '/imgs/circulo.svg front', '/imgs/circulo.svg front', '/imgs/circulo.svg front', '/imgs/star.svg back', '/imgs/circulo.svg front',
]

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

const preLoad = ()=>{
    arrayPre = [...circulosEstrelas]
    
    arrayPre.forEach(()=>{

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

button.addEventListener('click', (e) => {
    e.preventDefault()
    loadSinal()
})

