// Variables para contar
var total = 0;
var hechas = 0;

// Referencias a los elementos
var boton = document.getElementById("btnAgregar");
var input = document.getElementById("tareaInput");
var lista = document.getElementById("listaTareas");

// Evento para agregar
boton.addEventListener("click", function() {
    var texto = input.value;

    if (texto === "") {
        document.getElementById("errorMsg").style.display = "block";
        console.log("Error: campo vacío"); // Log 1
    } else {
        document.getElementById("errorMsg").style.display = "none";
        crearTarea(texto);
        input.value = ""; // Limpiar el cuadro de texto
    }
});

function crearTarea(textoTarea) {
    total = total + 1; // Aumentar contador
    
    var select = document.getElementById("categoriaSelect");
    var categoria = select.value;

    // Si eligió "Otra", sacar el valor del input oculto
    if (categoria === "Otra") {
        categoria = "✨ " + document.getElementById("otraInput").value;
    }

    // Crear el elemento de la lista
    var li = document.createElement("li");
    li.className = "tarea-card";
    
    // Si es urgente, le ponemos el estilo rojo
    if (categoria.includes("Urgente")) {
        li.className = "tarea-card urgente";
    }

    // Insertar el contenido
    li.innerHTML = "<span>" + categoria + ": " + textoTarea + "</span>" +
                   "<div>" +
                   "<button onclick='marcarHecha(this)'>✅</button> " +
                   "<button onclick='eliminar(this)'>🗑️</button>" +
                   "</div>";

    lista.appendChild(li);
    actualizarPantalla();
    console.log("Tarea añadida: " + textoTarea); // Log 2
}

function mostrarOtra() {
    var select = document.getElementById("categoriaSelect");
    var inputOtra = document.getElementById("otraInput");
    
    if (select.value === "Otra") {
        inputOtra.style.display = "block";
    } else {
        inputOtra.style.display = "none";
    }
}

function marcarHecha(boton) {
    var li = boton.parentElement.parentElement;
    // Solo sumamos si no estaba ya completada
    if (li.className.indexOf("completada") === -1) {
        li.className = li.className + " completada";
        hechas = hechas + 1;
        actualizarPantalla();
    }
}

function eliminar(boton) {
    var confirmacion = confirm("¿Seguro que quieres borrarla?");
    if (confirmacion === true) {
        var li = boton.parentElement.parentElement;
        
        // Si estaba marcada como hecha, restamos al contador de hechas
        if (li.className.indexOf("completada") !== -1) {
            hechas = hechas - 1;
        }
        
        li.remove();
        total = total - 1;
        actualizarPantalla();
        console.log("Tarea eliminada"); // Log 3
    }
}

function actualizarPantalla() {
    document.getElementById("totales").innerHTML = total;
    document.getElementById("hechas").innerHTML = hechas;
}

function limpiarCompletadas() {
    var todasLasHechas = document.querySelectorAll(".completada");
    var cantidad = todasLasHechas.length;
    
    if (cantidad > 0) {
        if (confirm("¿Borrar " + cantidad + " tareas hechas?")) {
            for (var i = 0; i < todasLasHechas.length; i++) {
                todasLasHechas[i].remove();
                total = total - 1;
            }
            hechas = 0;
            actualizarPantalla();
        }
    }
}