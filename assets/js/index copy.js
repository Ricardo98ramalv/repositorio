// DOM
console.log('DOM:')
console.dir(document)

// window
// BOM - Browser Object Model 
// console.log(window)

// window.alert('Hello World')
// const value = window.prompt('Cual es tu nombre?')
// null es el valor por defecto que arroja el navegador cuando no encuentra un elemento o un valor
// console.log('Hola ' + value)
// const value = window.confirm('Quieres ir a google?')

// console.log(value)

// location - objeto que contiene la informacion de la url

// if (value) {
//   window.location.href = 'https://google.com'
// }
// console.log(window.navigator.userAgent)

// DOM - Document Object Model
// console.log(document)
// console.dir(document)

/* Para acceder a cualquier parte o un node del documento, tenemos que usar "document". */

// html
// console.dir(document.documentElement)

// head
// console.dir(document.head)

// body
// console.dir(document.body)

// nodos
// console.dir(document.body.firstChild)

/* Muestra el tipo de nodo 1 - 12 */
// console.log(document.body.firstChild.nodeType)

/* Muestra el nombre del nodo */
// console.log(document.body.firstChild.nodeName)

/* Hay 12 tipos de nodos:
  1. ELEMENT_NODE
  2. ATTRIBUTE_NODE
  3. TEXT_NODE
  4. CDATA_SECTION_NODE
  5. ENTITY_REFERENCE_NODE
  6. ENTITY_NODE
  7. PROCESSING_INSTRUCTION_NODE
  8. COMMENT_NODE
  9. DOCUMENT_NODE
  10. DOCUMENT_TYPE_NODE
  11. DOCUMENT_FRAGMENT_NODE
  12. NOTATION_NODE */

// nodeName - nombre del nodo de cualquier tipo de nodo
// console.log(document.body.nodeName)
// console.log(document.body.firstChild.nodeName)

// tagName - nombre del nodo de tipo elemento
// console.log(document.body.tagName)
// console.log(document.body.firstChild.tagName)

// const window = {
// const document = {
//   DCOTYPE: "",
//   html: {
//     head: {...},
//     body: {
//       id: "",
//       classList: [...],
//       style: {...},
//       header: {
//         id: "",
//         classList: [...],
//         style: {...},
//         h1: { 
//           id: "",
//           classList: [...],
//           style: {...},
//         },
//       },
//       main: {
//         id: "",
//         classList: [...],
//         style: {...},
//       },
//     }
//   }
// }

// }

/* Propiedades de navegación */
// console.log('todos los nodos:')
// hijos
// firstChild - primer nodo hijo
// lastChild - ultimo nodo hijo

// hermanos
// nextSibling - siguiente hermano
// previousSibling - hermano anterior

// padre
// parentNode - nodo padre
// console.dir(document.firstChild.nextSibling.lastChild.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.parentNode.parentNode.parentNode.parentNode)

// childNodes - todos los nodos hijos
// console.log(document.body.childNodes)

// for (let node of document.body.childNodes) {
//   if (node.nodeType === 1) {
//     console.log('nodo:', node)
//   }
// }

// console.log('nodos de elemento:')
// hijos
// firstElementChild - primer nodo hijo
// lastElementChild - ultimo nodo hijo

// hermanos
// nextElementSibling - siguiente hermano
// previousElementSibling - hermano anterior

// padre
// parentElement - nodo padre
// console.dir(document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.parentElement.parentElement.parentElement.parentElement)

// children - todos los nodos hijos de tipo elemento
// console.log(document.body.children)

// Métdos de busqueda
// console.log('Métodos de búsqueda:')

// document.getElementById - devuelve un elemento por su id
// console.log(document.getElementById('btnOpen'))

// document.querySelector(selecor o selectores) - devuelve el primer elemento que coincida con el selector

// Selector de tipo o etiqueta
// console.log(document.querySelector('h1'))

// Selector de clase
// console.log(document.querySelector('.footer__copy'))

// Selector de id
// console.log(document.querySelector('#btnOpen'))

// Selector de atributo
// console.log(document.querySelector('[href="#home"]'))

// Traer todos los h2
// console.log(document.querySelectorAll('h2'))

// for (let elem of document.querySelectorAll('h2')) {
//   console.log(elem.innerHTML)
// }
// const arr = [1,2,3,4]
// console.log(arr)

// console.log(Array.from(document.querySelectorAll('h2')))

// Eventos
console.log('Eventos:')
// Hay 3 formas de agregar eventos a un elemento
// 1. Atributo HTML
function saludar() {
  window.alert('Hola desde JS')
}

// 2. Propiedad de DOM
const btnOpen = document.getElementById('btnOpen')

// Esto esta correcto
// btnOpen.onclick = saludar

// Esto esta mal
// btnOpen.onclick = saludar()

// 3. Método addEventListener
// funcion manejadora de eventos (event handler)
document.addEventListener('click', function (event) {
  // elemento que disparo el evento (elemento objetivo)
  // console.log(event.target)

  // closest - devuelve el ancestro mas cercano que cumpla con el selector

  if (event.target.closest('.btn--open')) {
    console.log('fue el boton de menu de hamburguesa')
  }

  // matches - devuelve true si el elemento cumple con el selector dado

  if (event.target.matches('#logo')) {
    console.log('fue el logo')
  }
})