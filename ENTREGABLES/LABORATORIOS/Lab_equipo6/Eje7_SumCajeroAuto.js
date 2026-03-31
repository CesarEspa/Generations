const prompt = require("prompt-sync")();

let usuario = prompt("Escribe tu usuario: ");
let sueldo = parseFloat(prompt("Escribe el sueldo actual: "));
let retirar = parseFloat(prompt("Escribe el monto a retirar: "));

retirarDinero(sueldo,retirar)

function retirarDinero(saldoact,montoare){
    if (saldoact >= montoare) {
        let total = saldoact - montoare;            
        console.log("El saldo restante es de: " + total)
    }else{
        console.log("Saldo insuficiente");
    }
   
}





