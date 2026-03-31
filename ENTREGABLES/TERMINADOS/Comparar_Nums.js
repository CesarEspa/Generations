const prompt = require("prompt-sync")();

let numeros = []

for (let i = 0; i < 3; i++) {
    let num = parseInt(prompt(`Ingrese el número ${i + 1}: `));
    numeros.push(num);
}
console.log("--------------------------------------");

for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[i] > numeros[j]) {
            let temp = numeros[i];
            numeros[i] = numeros[j];
            numeros[j] = temp;
        }
    }
}

console.log("Números ordenados de menor a mayor: ", numeros);
console.log("--------------------------------------");

for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[i] < numeros[j]) {
            let temp = numeros[i];
            numeros[i] = numeros[j];
            numeros[j] = temp;
        }
    }
}

console.log("Números ordenados de mayor a menor: ", numeros);
console.log("--------------------------------------");


for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] === numeros[i + 1]) {
        console.log("Todos los numeros son iguales ");
        break;
    }else{
        console.log("Los numeros son diferentes ");
        break;
    }
}
console.log("--------------------------------------");