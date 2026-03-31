prompt = require("prompt-sync")();

class Usuario {
    constructor(nombre, email, rol="cliente") {
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
        this.activo = true;
    }
    saludo() {
        return `Hola: ${this.nombre} tu rol es: ${this.rol}`;
    }

    desactivar() {
        this.activo = false;
        return "El usuario: " + this.nombre + " ha sido desactivado correctamente";
    }

    resumen() {
        return `Hola: ${this.nombre}, tu rol es: ${this.rol},tu correo es: ${this.email} y tu cuenta se encuentra ${this.activo ? "activa" : "inactiva"}`;
    }

}


let empleado1 = new Usuario("Cesar España", "cesarespana.dev@gmail.com");


console.log(empleado1.saludo());
console.log(empleado1.resumen());
console.log(empleado1.desactivar());
console.log(empleado1.resumen());


class UsuarioVIP extends Usuario {
    constructor(nombre, email, membresia) {
        super(nombre, email, "Cliente VIP" ); 
        this.membresia = membresia; 
    }


    saludo() {
        return `${super.saludo()} y tu nivel de membresia es de ${this.membresia}.`;
    }

beneficios() {
        return `Como miembro ${this.membresia}, tienes acceso a soporte 24/7 y descuentos exclusivos.`;
    }

}
module.exports = { Usuario, UsuarioVIP };


console.log("\n--- Usuario VIP ---");
const vip1 = new UsuarioVIP("Elena Nito", "elena@vip.com", "Platinum");
console.log(vip1.saludo()); 
console.log(vip1.resumen()); 
vip1.desactivar(); 
console.log(vip1.beneficios());
