const prompt = require("prompt-sync")();

let BuscarDoc = prompt("Escriba el nombre del producto que quiere buscar: ")

const inventario = [
{ nombre: "Camisa", precio: 20, cantidad: 10 },
{ nombre: "Zapatos", precio: 50, cantidad: 2 }
];

function buscarProducto(nombre, lista){
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].nombre.toLowerCase() === nombre.toLowerCase()) {
            return lista[i];
        }
    }
    return null
}
const result = buscarProducto(BuscarDoc, inventario);

if (result) {
  console.log("Producto encontrado:", result);
} else {
  console.log("No se encontró el producto.");
}