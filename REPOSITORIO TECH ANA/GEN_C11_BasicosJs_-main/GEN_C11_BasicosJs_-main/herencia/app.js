//! Clase → Plantilla para crear objetos

class Usuario{
    constructor(nombre,email){
        this.nombre = nombre;
        this.email = email;
        this.activo = true;
    }
    saludo(){
        return "Hola " + this.nombre + " mi email: " + this.email
    }
    estado(){
        //! condición ? "Si es true" : "Si es false"
        return this.activo ? "Cuanta activa" : "Inactivo";
    }
}

let usuario1 = new Usuario("Luselly", "luselly@gmial.com")
let usuario2 = new Usuario("pepito", "pepito@gmial.com")

console.log(usuario1.saludo());
console.log(usuario1.activo);
console.log(usuario1.estado());

console.log(usuario2.saludo());
usuario2.activo = false;
console.log(usuario2.estado());




class UsuarioVIP extends Usuario {
    constructor(nombre, email, membresia){
        super(nombre, email);  //! → Me lo heredo mi papá 
        this.membresia = membresia; //! → Es mío propio
    }

    beneficios(){
        return this.nombre + " tu menbresia es: " + this.membresia
    }
    //! sobreescritura 
    saludo(){
        return "Hola Usuario Vip: " + this.nombre + " tu membresia es : " + this.membresia
    }
}

let usuarioVp = new UsuarioVIP("Pepito", "pe@coreo.com", "Platino");

console.log(usuarioVp.saludo());
console.log(usuarioVp.beneficios());

const prompt = require('prompt-sync')();

let nombre = prompt("Nombre?");

console.log(nombre);
