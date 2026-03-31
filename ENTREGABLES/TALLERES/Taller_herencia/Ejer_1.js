const prompt = require("prompt-sync")();

class Empleado{
    constructor(nombre,cargo, salario){
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
        this.activo = true;     
    }
    presentarse(){
        return "Hola " + this.nombre + " tu cargo es: " + this.cargo
    }
    estado(){
        //! condición ? "Si es true" : "Si es false"
        return this.activo ? "Cuenta activa" : "Inactivo";
    }
    calcularSalarioAnual(){
        return "El salario anual es de: "+ this.salario*12;
    }
    desactivar(){
        this.activo = false
        return "El empleado: "+ this.nombre +" ha sido desactivado"
    }
    info(){
        return `El usuario ${this.nombre} con cargo ${this.cargo} con salario de ${this.salario} USD , se encuentra con ${this.estado()}`
    }
}
/*
let empleado1 = new Empleado("Cesar España", "Lider", "40")
let empleado2 = new Empleado("Angie Gamboa", "Lider2", "39")
let empleado3 = new Empleado("Maira Pinilla", "Lider3", "41")

console.log(empleado1.presentarse());
console.log(empleado1.activo);
console.log(empleado1.calcularSalarioAnual());
console.log(empleado1.info());
console.log(empleado1.desactivar());
console.log(empleado1.info());
*/

class Lider extends Empleado {
    constructor(nombre, salario, equipo) {
        super(nombre,"Lider del equipo", salario ); // cargo fijo
        this.equipo = equipo; // array recibido como argumento
    }
    presentarEquipo() {
        return `El equipo de ${this.nombre} está conformado por: ${this.equipo.join(", ")}.`;
    }
    agregarMiembro(nombre){
        this.equipo.push(nombre)
        return  "El Empleado: "+nombre +" ha sido actualizado "
    }
    info(){
        return "Hola Lider: " + this.nombre + " tu equipo es: " + this.equipo.join(", ");
    }


}
/*
let Lider1 = new Lider("Cesar España",  40, ["Angie Gamboa", "Maira Pinilla"]);
let Lider2 = new Lider("Juan Torres",   35, ["Pedro Ruiz",   "Laura Mesa"]);

console.log(Lider1.calcularSalarioAnual());
console.log(Lider2.calcularSalarioAnual());

console.log(Lider1.desactivar());
console.log(Lider1.estado()); 

console.log(Lider2.presentarEquipo());

let nom = prompt("Nuevo integrante para el equipo de Lider2: ");
console.log(Lider2.agregarMiembro(nom));
console.log(Lider2.presentarEquipo());

*/



let totalMensual = emp1.salario + emp2.salario + emp3.salario + emp4.salario + lider1.salario + lider2.salario;
console.log(" Nómina mensual total: $" + totalMensual);
console.log(" Nómina anual total: $" + totalMensual * 12);
console.log(emp1.desactivar());
console.log(emp1.info());

console.log(lider1.info());
console.log(lider1.presentarEquipo());
console.log(lider2.info());
console.log(lider2.presentarEquipo());