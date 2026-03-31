//! Creando mi objeto producto
let producto = {
    nombre: "Papitas",
    precio: 35000,
    marca: "GEN11",
    stock: 12,
    //& Cree un método 
    calcularIVa: function(){
        return this.precio * 0.19;
    },
    calcularTotal: function() {
        return this.precio + this.calcularIVa();
    },
    tengoStock: function(minimo){
        return this.stock >= minimo;
    }
};

//! Leyendo las propiedades de mi objeto producto
console.log(producto.nombre);
console.log(producto.precio);
//! Simulé la venta del prodcuto 
producto.stock = producto.stock - 1;
console.log(producto.stock);

//! llamar al método 
console.log(producto.calcularIVa());
console.log(producto.calcularTotal());


//? ==================================================================


//! Función consutructora

let producto1 = {
    nombre: "Papitas",
    precio: 35000,
    marca: "GEN11",
    stock: 12,
    calcularIVa: function(){
        return this.precio * 0.19;
    },
};

let producto2 = {
    nombre: "Papitas",
    precio: 35000,
    marca: "GEN11",
    stock: 12,
    calcularIVa: function(){
        return this.precio * 0.19;
    },
};


function Producto(nombre, precio, stock){
    this.nombre = nombre,
    this.precio = precio,
    this.stock = stock,

    this.calcularIVa = function(){
        return this.precio * 0.19;
    },
    this.calcularTotal = function() {
        return this.precio + this.calcularIVa();
    }
}

let papitas = new Producto("Papitas Saladas", 40000);
let papitas_Francesas = new Producto("Papitas Francesas", 40000);
let papitas_dulces = new Producto("Papitas dulces", 40000);


console.log(papitas);
console.log(papitas_Francesas);
console.log(papitas_dulces);

console.log(papitas.calcularTotal());

