const prompt = require("prompt-sync")();

let notas = [];
let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas que desea promediar: "));

    for (let i = 0; i < cantidadNotas; i++) {
        let nota = parseFloat(prompt("Ingrese la nota " + (i + 1) + ": "));
        notas.push(nota);
    }

function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
        
    }
    return suma;
}

let promedio = calcularPromedio(notas) / notas.length;
console.log("El promedio de las notas es: " + promedio.toFixed(2));