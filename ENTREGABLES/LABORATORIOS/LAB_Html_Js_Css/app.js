const botonAumento = document.getElementById("Aumento");
const botonDecremento = document.getElementById("Decremento");
const botonReiniciar = document.getElementById("Reiniciar");
const resultado = document.getElementById("resultado");
const titulo = document.getElementById("conta");

let contador = 0;

botonAumento.addEventListener("click", function aumentarValor(){
    contador = contador + 1;
    actualizarContador();
})

botonDecremento.addEventListener("click", function disminuirValor(){
    contador = contador - 1;
    actualizarContador();
})


botonReiniciar.addEventListener("click", function restablecerValor(){
    contador = 0;
    actualizarContador();
})


function actualizarContador(){
    resultado.textContent = contador;
    titulo.classList.toggle("cambioColor", contador == 10)

}

