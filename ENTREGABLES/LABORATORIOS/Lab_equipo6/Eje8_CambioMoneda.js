const prompt = require("prompt-sync")();

let dinero = prompt("Escribe la cantidad de dinero que deseas convertir:");

while (true){
    var monedaCambio = prompt("Escribe la moneda a la que deseas convertir (USD, EUR):").toUpperCase();
    if (monedaCambio === "USD" || monedaCambio === "EUR"){
        break;
    }else{
        console.log("Error, Digite bien")
    }
}
 
function convertirMoneda(monto, monedaDestino){
    if (monedaDestino === "USD"){
        let total = monto * 3692
        console.log("$"+ monto+" COP, Son: $"+ total+ " USD")
    }else{
        let total = monto * 4240
        console.log("$"+monto+" COP, Son: $"+ total+ " EUR")

    }
}
convertirMoneda(dinero, monedaCambio);