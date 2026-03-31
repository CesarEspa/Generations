//! === MATH ===
let precio = 187350;

// redondea al entero más cercano
console.log(Math.round(precio)); 
//  redondear a miles     
console.log(Math.round(precio / 1000) * 1000); 
 //  el menor
console.log(Math.min(95000, 87500, 112000));   
 //  el mayor
console.log(Math.max(95000, 87500, 112000));   
// 0 a 9  — índice aleatorio
console.log(Math.floor(Math.random() * 10));    


//! === ARRAY ===
let carrito = ["Teclado", "Mouse", "Audífonos"];

carrito.push("Webcam");
console.log(carrito);         

let retirado = carrito.pop();
console.log(retirado);          
console.log(carrito);          

console.log(carrito.indexOf("Mouse"));      
console.log(carrito.includes("iPad"));      
console.log(carrito.join(" · "));           
console.log(carrito.length);            


//! === STRING ===
let nombre = "  audífonos bluetooth pro  ";

console.log(nombre.trim());              
console.log(nombre.trim().toUpperCase()); 
console.log(nombre.trim().includes("bluetooth")); 
console.log(nombre.trim().replace("bluetooth", "BT")); 
console.log(nombre.trim().length);    

const prompt = require('prompt-sync')();

let nombre2 = prompt("Cual")
console.log(nombre2);
