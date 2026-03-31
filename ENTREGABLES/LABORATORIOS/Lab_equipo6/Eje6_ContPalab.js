const prompt = require("prompt-sync")();

function contarPalabras(texto) {
        if (texto.trim() === "") return 0;
    let palabras = texto.trim().split(/\s+/);
    return palabras.length;
}
let texto = prompt("Ingresa un texto:");
let cantidad = contarPalabras(texto);
console.log("El texto tiene " + cantidad + " palabras.");