prompt = require("prompt-sync")();

class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
    calcularTotal() {
        let total = this.precio + (this.precio * 0.19);
        return `el precio es de: ${total} con el IVA incluido`;
    }

    aplicarDescuento(porcentaje) {
        let total = this.precio - (this.precio * (porcentaje/100));
        return "el precio es de : " + total + " con el descuento aplicado";
    }

    resumen() {
        return `Hola: ${this.nombre}, la categoria es: ${this.categoria}, y tu precio es de: ${this.precio}`;
    }

    tarjeta() {
        return `tu nombre es: ${this.nombre}, tu categoria es: ${this.categoria},  y el precio es: ${this.calcularTotal()}`;
    }

}

class ProductoDigital extends Producto {
    constructor(nombre, precio, categoria, licencia) {
        super(nombre, precio, categoria);
        this.licencia = licencia;
    }

    calcularTotal() {
        return `el precio es de: ${this.precio} (Producto Digital - Sin IVA)`;
    }

    tarjeta() {
        return `Producto Digital: ${this.nombre} | Licencia: ${this.licencia} | Total: ${this.calcularTotal()}`;
    }
}

module.exports = { Producto, ProductoDigital };
