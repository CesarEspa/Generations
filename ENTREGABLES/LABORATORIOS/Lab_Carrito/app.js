let total = 0;
let contador = 0;

const lista = document.querySelector('#lista-carrito');
const totalHTML = document.querySelector('#total');
const badge = document.querySelector('#badge');
const msgVacio = document.querySelector('#msg-vacio');

document.querySelectorAll('.btn-agregar').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const nombre = e.target.dataset.nombre;
        const precio = parseInt(e.target.dataset.precio);
        
        if (msgVacio) msgVacio.style.display = 'none';

        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `${nombre} - $${precio.toLocaleString()} <button class="btn-eliminar">X</button>`;
        
        // Eliminar ítem
        li.querySelector('.btn-eliminar').onclick = () => {
            li.remove();
            total -= precio;
            contador--;
            actualizarUI();
            if (contador === 0) msgVacio.style.display = 'block';
        };

        lista.appendChild(li);
        total += precio;
        contador++;
        actualizarUI();
    });
});

function actualizarUI() {
    totalHTML.textContent = `$${total.toLocaleString()}`;
    badge.textContent = contador;
}

document.querySelector('#btn-vaciar').onclick = () => {
    lista.innerHTML = '';
    total = 0;
    contador = 0;
    actualizarUI();
    msgVacio.style.display = 'block';
};