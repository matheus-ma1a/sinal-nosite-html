const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')


img1.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href = '../jogo/jogo.html'
})

img2.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href = '../penalty/penalty.html'
    console.log('asdf')
})
