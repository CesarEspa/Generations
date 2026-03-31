const { Usuario, UsuarioVIP } = require("./usuario.js");
const { Producto, ProductoDigital } = require("./producto.js");



const user1 = new Usuario("Andrés Mendoza", "andres@mail.com"); // Cliente regular
const user2 = new Usuario("Beatriz Soler", "admin@tienda.com", "administrador"); 
const user3 = new UsuarioVIP("César España", "cesar@vip.com", "Diamond");


const prodFisico1 = new Producto("Teclado Mecánico", 120000, "Periféricos");
const prodFisico2 = new Producto("Silla Gamer", 450000, "Muebles");
const prodDigital1 = new ProductoDigital("E-book Node.js", 30000, "Libros", "Mensual");
const prodDigital2 = new ProductoDigital("Suscripción Premium", 90000, "Software", "Anual");


user2.desactivar();


console.log("--- OFERTA RELÁMPAGO ---");
console.log(`Descuento en ${prodFisico2.nombre}: ${prodFisico2.aplicarDescuento(20)}`);
console.log("------------------------\n");


console.log("=== CATÁLOGO DE PRODUCTOS ===");
const productos = [prodFisico1, prodFisico2, prodDigital1, prodDigital2];
productos.forEach(p => console.log(p.tarjeta()));


console.log("\n=== LISTADO DE USUARIOS ===");
const usuarios = [user1, user2, user3];
usuarios.forEach(u => console.log(u.resumen()));