const plu = document.querySelector('.plus') 
const num = document.querySelector('.number')
const min = document.querySelector('.minus') 

const res = document.querySelector('.res') 
const ran = document.querySelector('.rand') 

plu.onclick = () => {
    num.innerText++
}
min.onclick = () => {
    num.innerText--
}
res.onclick = () => {
    num.innerText = 0
}
ran.onclick = () => {
    num.innerText = Math.round(Math.random() * 100)
}
