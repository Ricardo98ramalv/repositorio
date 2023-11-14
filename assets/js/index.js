// agregar dinamica para abrir y cerrar los botones//
// const btnOpen = document.querySelector('.btn--open')
// const btnClose = document.querySelector('.btn--close')
const menu = document.querySelector('.header__menu')

// btnOpen.addEventListener('click',function(){
//     // console.log('me diste un click')
//     menu.classList.toggle('show--menu')
// })

// btnClose.addEventListener('click',function(){
//     // console.log('me diste un click')
//     menu.classList.remove('show--menu')
// })
//segunda forma de hacerlo//
const headerNav = document.querySelector('.header__nav')
headerNav.addEventListener('click',function (e) {
    if (e.target.closest('.btn--open')) {
        menu.classList.toggle('show--menu')  
    }
    if (e.target.closest('.btn--close')) {
        menu.classList.remove('show--menu')  
    }
    if (e.target.closest('.list__link')) {
        menu.classList.toggle('show--menu')  
    }
    e.target.classList.add('active')
})
// agregando escuchador de teclado cerrar el menu con escape
document.addEventListener('keydown',function(e) {
// console.log(e.key)
if (e.key === 'Escape') {
 menu.classList.remove('show--menu')   
}    
})
// haciendo linea de cargar pagina parte superior
//BOM
const html= document.documentElement
console.log(html.scrollHeight)// altura de pagina
console.log(html.clientHeight) // altura de la ventana
console.log(html.scrollTop)// altura a la que se ha desplazado

const progress = document.querySelector('.progress')
window.addEventListener('scroll',function(e){
    const alturaPagina = html.scrollHeight - html.clientHeight
    const scrollActual = html.scrollTop
    const progreso = scrollActual / alturaPagina
    console.log(Math.round(progreso*100)+'%')
    progress.style.width= Math.round(progreso*100)+'%'
})

// trabajando con el formulario
const form = document.getElementById('form')
// console.log(form)
form.addEventListener('submit',function(e) {
e.preventDefault() // remueve el que al hacer click sobre el envar se recage la pag
    // const formData= new FormData(this)
    // console.log({
    // name:  formData.get('name'),
    // email: formData.get('correo'),
    // mensaje: formData.get('message')
    // })
    const input = e.target.elements
    console.log({
        name: input.name.value,
        email: input.correo.value,
        mensaje: input.message.value
    })
})