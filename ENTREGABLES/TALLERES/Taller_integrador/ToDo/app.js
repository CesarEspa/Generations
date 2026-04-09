let total = 0;
let hechas = 0;
let boton = document.getElementById("btnAgregar");
let input = document.getElementById("tareaInput");
let lista = document.getElementById("listaTareas");


boton.addEventListener("click", function() {
    var texto = input.value;

    if (texto === "") {
        document.getElementById("errorMsg").style.display = "block";
    } else {
        document.getElementById("errorMsg").style.display = "none";
        crearTarea(texto);
        input.value = ""; // Limpiar el cuadro de texto
    }
});

function crearTarea(textoTarea) {
    total = total + 1;
    
    var select = document.getElementById("categoriaSelect");
    var categoria = select.value;

    if (categoria === "Otra") {
        categoria = "✨ " + document.getElementById("otraInput").value;
    }

    var li = document.createElement("li");
    li.className = "tarea-card";
    

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

    var respuesta = confirm("¿Seguro que quieres borrarla?");
    if (respuesta) {
        var li = boton.parentElement.parentElement;
        // Revisar si está completada
        if (li.className.includes("completada")) {
            hechas = hechas - 1;
        }
        li.remove();
        total = total - 1;
        actualizarPantalla();

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