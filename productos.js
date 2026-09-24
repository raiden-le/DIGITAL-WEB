document.addEventListener('DOMContentLoaded', () => {
    const btnCarrito = document.getElementById('btn-carrito');
    const carritoModal = document.getElementById('carrito-modal');
    const cerrarCarrito = document.getElementById('cerrar-carrito');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    const contadorCarrito = document.getElementById('contador-carrito');
    const botonesAgregar = document.querySelectorAll('.btn-agregar');
    const btnComprar = document.getElementById('btn-comprar');

    let carrito = [];

    // Abrir y cerrar el panel del carrito
    btnCarrito.addEventListener('click', () => {
        carritoModal.classList.add('activo');
    });

    cerrarCarrito.addEventListener('click', () => {
        carritoModal.classList.remove('activo');
    });

    // Agregar productos al carrito
    botonesAgregar.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            const fila = e.target.closest('tr');
            
            const producto = {
                codigo: fila.children[0].textContent,
                nombre: fila.children[1].textContent,
                marca: fila.children[2].textContent,
                capacidad: fila.children[3].textContent,
                tipo: fila.children[4].textContent,
                precioTexto: fila.children[5].textContent,
                // Extraemos el valor numérico del precio (ej. "S/. 1600" -> 1600)
                precio: parseFloat(fila.children[5].textContent.replace('S/.', '').trim())
            };

            agregarAlCarrito(producto);
        });
    });

    function agregarAlCarrito(producto) {
        // Verificar si ya existe en el carrito
        const index = carrito.findIndex(item => item.codigo === producto.codigo);
        
        if (index !== -1) {
            carrito[index].cantidad += 1;
        } else {
            producto.cantidad = 1;
            carrito.push(producto);
        }

        actualizarCarrito();
        // Mostrar visualmente el carrito al agregar un producto
        carritoModal.classList.add('activo');
    }

    function actualizarCarrito() {
        listaCarrito.innerHTML = '';
        let total = 0;
        let totalItems = 0;

        carrito.forEach((item, index) => {
            total += item.precio * item.cantidad;
            totalItems += item.cantidad;

            const div = document.createElement('div');
            div.classList.add('carrito-item');
            div.innerHTML = `
                <div class="carrito-item-info">
                    <p>${item.marca} ${item.capacidad} (${item.tipo})</p>
                    <span>S/. ${item.precio} x ${item.cantidad}</span>
                </div>
                <button class="btn-eliminar" data-index="${index}">X</button>
            `;
            listaCarrito.appendChild(div);
        });

        totalCarrito.textContent = `S/. ${total.toFixed(2)}`;
        contadorCarrito.textContent = totalItems;

        // Añadir eventos a los botones de eliminar individuales
        const botonesEliminar = document.querySelectorAll('.btn-eliminar');
        botonesEliminar.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                carrito.splice(index, 1);
                actualizarCarrito();
            });
        });
    }

    // Botón de finalizar compra
    btnComprar.addEventListener('click', () => {
        if (carrito.length === 0) {
            alert('Tu carrito está vacío.');
            return;
        }
        alert('¡Compra realizada con éxito! Gracias por tu preferencia.');
        carrito = [];
        actualizarCarrito();
        carritoModal.classList.remove('activo');
    });
});