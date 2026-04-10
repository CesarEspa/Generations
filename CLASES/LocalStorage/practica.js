/*localStorage.setItem("nombre", "Cesar");

console.log(localStorage.getItem("nombre"));
*/

function guardarNombre() {
    const nombre = document.getElementById("nombreInput").value;

    if(nombre.trim() === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    localStorage.setItem("nombreUsuario", nombre);
    alert("Nombre guardado en localStorage");

    document.getElementById("resultado").textContent = `Nombre guardado: ${nombre}`;
}


function mostrarCantidad() {
  const cantidad = localStorage.length;
  document.getElementById("resultado").textContent =
    ` Hay ${cantidad} clave(s) guardada(s) en localStorage.`;
}

function eliminarUno() {
  localStorage.removeItem("nombreUsuario");
  document.getElementById("resultado").textContent =
    ` Listo, eliminado`;
}


function eliminarTodos() {
  localStorage.clear();
  document.getElementById("resultado").textContent =
    ` Listo, eliminado`;
}