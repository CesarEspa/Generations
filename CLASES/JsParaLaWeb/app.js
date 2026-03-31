console.log("Aqui estoy");

console.log("Aquí estoy de verdad que si estoy");
//accediendo al elemento por medio del DOM
const boton = document.getElementById("btnCalcular");
const nombre = document.getElementById("nombre").value;
const htmlMarcado = document.getElementById("html").checked;
//le esta daando un estilo a resultado para que sea visible
document.getElementById("resultado").style.display="block"

boton.addEventListener("click", function(){
    console.log("Click en el botón");
})