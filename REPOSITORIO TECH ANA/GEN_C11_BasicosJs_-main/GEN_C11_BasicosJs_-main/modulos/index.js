class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email  = email;
  }
  saludo() {
    return "Hola, soy " + this.nombre;
  }
}

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  calcularTotal() {
    return this.precio * 1.19;
  }
}

function formatearPrecio(precio) {
  return "$" + precio.toLocaleString("es-CO");
}

function validarEmail(email) {
  return email.includes("@") && email.includes(".");
}

let u1      = new Usuario("Ana", "ana@email.com");
let p1      = new Producto("Teclado", 250000);

console.log(u1.saludo());
console.log(formatearPrecio(p1.calcularTotal()));