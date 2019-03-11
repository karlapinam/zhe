
//let textonew= ('hola')
/*
const cambiar = () => {
 albumimg.src= textonew
}
*/

/*
function cambiar(){
   albumimg.innerHTML = "Hello";
  }
  know.addEventListener('click',cambiar)
*/
let know= document.getElementById('boton')
let albumimg= document.getElementById('albumimg')

let casa= document.getElementById('casa')

function knowmore(){
document.getElementById('casa').innerHTML =
"Hello Dolly!"
}
know.addEventListener('click',knowmore)
