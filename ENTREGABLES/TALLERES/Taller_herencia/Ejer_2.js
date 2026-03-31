prompt = require("prompt-sync")();

class Contenido {
    constructor(titulo, genero, anio) {
        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
        this.disponible = true;
    }
    ficha() {
        return `Título: ${this.titulo} Género: ${this.genero} Año: ${this.anio}`;
    }
    estado() {
        return this.disponible ? "Contenido disponible" : "Contenido no disponible";
    }
    retirar() {
        this.disponible = false;
        return "El contenido: " + this.titulo + " ha sido retirado";
    }
}

class Pelicula extends Contenido {
    constructor(titulo, genero, anio, duracion) {
        super(titulo, genero, anio);
        this.duracion = duracion;
    }
    duracionFormateada() {
        const horas = Math.floor(this.duracion / 60);
        const minutos = this.duracion % 60;
        return `${horas}h ${minutos}min`;
    }
    ficha() {
        return super.ficha() + ` | Duración: ${this.duracionFormateada()}`;
    }
}

class Serie extends Contenido {
    constructor(titulo, genero, anio, temporadas) {
        super(titulo, genero, anio);
        this.temporadas = temporadas;
        this.episodiosPorTemporada = 0;
    }
    registrarEpisodios(cantidad) {
        this.episodiosPorTemporada = cantidad;
        return `Se registraron ${cantidad} episodios por temporada para ${this.titulo}`;
    }
    totalEpisodios() {
        return this.temporadas * this.episodiosPorTemporada;
    }
    ficha() {
        return super.ficha() + ` | Temporadas: ${this.temporadas} | Total episodios: ${this.totalEpisodios()}`;
    }
}
let peli1 = new Pelicula("Inception",      "Ciencia ficción", 2010, 148);
let peli2 = new Pelicula("El Padrino",     "Drama",           1972, 175);
let peli3 = new Pelicula("Interstellar",   "Ciencia ficción", 2014, 169);

let serie1 = new Serie("Breaking Bad",     "Drama",           2008, 5);
let serie2 = new Serie("Stranger Things",  "Terror",          2016, 4);
let serie3 = new Serie("The Office",       "Comedia",         2005, 9);


serie1.registrarEpisodios(13);
serie2.registrarEpisodios(8);
serie3.registrarEpisodios(24);


const catalogo = [peli1, peli2, peli3, serie1, serie2, serie3];

for (let i = 0; i < catalogo.length; i++) {
    console.log(catalogo[i].ficha());
}


console.log(peli2.retirar());
console.log(peli2.estado());

console.log(serie3.retirar());
console.log(serie3.estado());


let contador = 0;
for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].disponible) {
        contador++;
    }
}
console.log(`Contenidos disponibles: ${contador} de ${catalogo.length}`);


