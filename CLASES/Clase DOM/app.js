const parrafo = document.getElementById("parrafo-intro"); 
const botonCambiarParrafo = document.getElementById("boton-cambiar-parrafo");

// Cambiar el texto del parrafo 
botonCambiarParrafo.addEventListener("click", function() {
  parrafo.textContent = "Este texto se ajuto desde js"
})


// Modificar estilos 
const imagen = document.getElementById("imagen-dino");
const botonBordeImagen = document.getElementById("boton-borde-imagen");

botonBordeImagen.addEventListener("click", function () {
  imagen.style.border = "2px solid red";
  imagen.style.borderRadius = "50%"; 
  imagen.style.filter = "grayscale(0%)"
});


// Manipular una lista 
const lista = document.getElementById("lista-items");
const botonAgregarItems = document.getElementById("boton-agregar-item");

botonAgregarItems.addEventListener("click", function () {
  const nuevoItem = document.createElement("li");
  nuevoItem.textContent = "Item añadido desde js"
  // Insertarlo
  lista.appendChild(nuevoItem); 
})

const botonEliminarItem = document.getElementById("boton-eliminar-item")

botonEliminarItem.addEventListener("click", function() {
  lista.lastElementChild.remove();
})

// Manipular con toggle 
const titulo = document.querySelector("#titulo-resaltado");
const botonResaltarTitulo = document.getElementById("boton-resaltar-titulo")

botonResaltarTitulo.addEventListener("click", function(){
  titulo.classList.toggle("resaltado")
})


const inputNombre = document.getElementById("input-nombre")
const botonMostrarNombre = document.getElementById("boton-mostrar-nombre")
const resultadoNombre = document.getElementById("resultado-nombre")


botonMostrarNombre.addEventListener("click", function() {
  const nombre = inputNombre.value.trim();

  if (nombre === "") {
    resultadoNombre.textContent = "Por favor escribe un nombre"; 
    resultadoNombre.classList.add("error");
  } else {
    resultadoNombre.textContent = "hola " + nombre;
    resultadoNombre.classList.remove("error")
  }
})

 