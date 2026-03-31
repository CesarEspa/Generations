let cantidad = 0;   
let total = 0;     


//! agregarProducto
//? Se llama desde onclick en cada botón del menú
//? Recibe el nombre y el precio del producto como argumentos

function agregarProducto(nombre, precio) {


  cantidad = cantidad + 1;  
  total = total + precio;  

  console.log("Producto agregado:", nombre, "| Precio:", precio, "| Total acumulado:", total);

  document.getElementById("cantidadCarrito").textContent = cantidad;

  document.getElementById("totalCarrito").textContent = total.toLocaleString("es-CO");

  alert("✅ " + nombre + " agregado a tu pedido");
}


//! finalizarPedido
//? Se llama desde onclick en el botón "Finalizar pedido"

function finalizarPedido() {

  
  if (cantidad === 0) {
    alert("Tu pedido está vacío. Agrega al menos un producto.");
    return;
  }

  const confirmado = confirm(
    "¿Confirmas tu pedido?\n" +
    cantidad + " producto(s) | Total: $" + total.toLocaleString("es-CO")
  );

  console.log("Confirmación del usuario:", confirmado);

  if (confirmado) {

    document.getElementById("mensajeConfirmacion").textContent =
      "¡Pedido confirmado! Tu café está en camino. Total: $" + total.toLocaleString("es-CO");

    document.getElementById("confirmacion").style.display = "block";

    cantidad = 0;
    total = 0;
    document.getElementById("cantidadCarrito").textContent = "0";
    document.getElementById("totalCarrito").textContent = "0";

  } else {

    alert("Pedido no confirmado. Puedes seguir agregando productos.");
  }
}

//! limpiarPedido
//? Se llama desde onclick en el botón "Limpiar pedido"

function limpiarPedido() {

  cantidad = 0;
  total = 0;

  document.getElementById("cantidadCarrito").textContent = "0";
  document.getElementById("totalCarrito").textContent = "0";

  document.getElementById("confirmacion").style.display = "none";
  document.getElementById("mensajeConfirmacion").textContent = "";

  console.log("Pedido limpiado");
}