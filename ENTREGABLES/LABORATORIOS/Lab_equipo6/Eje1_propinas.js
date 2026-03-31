const prompt = require("prompt-sync")();


function calcularPropina(total, porcentaje) {

    let totalpropi = total + (total * (porcentaje / 100));

    console.log("El total a pagar con la propina es de " + totalpropi);
}

let total = parseFloat(prompt("Ingrese el total de la cuenta:"));
let porcentaje = parseFloat(prompt("Ingrese el porcentaje de propina que desea dejar:"));
calcularPropina(total, porcentaje);





