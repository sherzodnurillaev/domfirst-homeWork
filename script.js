const plu = document.querySelector('.plus') 
const num = document.querySelector('.number')
const min = document.querySelector('.minus') 

const res = document.querySelector('.res') 
const ran = document.querySelector('.rand') 

plu.onclick = () => {
    if (num.innerHTML < 10) {
        num.innerHTML++
    }
}
min.onclick = () => {
    if(num.innerHTML > 0) {
        num.innerText--
    }
}
res.onclick = () => {
    num.innerText = 0
}
ran.onclick = () => {
        num.innerText = Math.round(Math.random() * 10)
}
