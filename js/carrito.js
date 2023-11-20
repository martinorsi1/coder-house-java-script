const carrito = JSON.parse(localStorage.getItem('carrito')) || [];


const agregarAlCarrito = (id) => {

    const productoAgregado = zapatillas.find((item) => item.id === id);

    if (productoAgregado) {
        if (productoAgregado.stock > 0) {
            carrito.push(productoAgregado);
            productoAgregado.stock--;
        } 
    }
};


const verCarrito = document.getElementById("verCarrito");
const carritoContainer = document.getElementById("carritoContainer");


verCarrito.addEventListener("click", () => {
    carritoContainer.innerHTML = "",
        carritoContainer.style.display = "flex";
    const carritoHeader = document.createElement("div");
    carritoHeader.className = "carrito-header"
    carritoHeader.innerHTML = `
    <h2 class = "carrito-header-title">CARRTIO</h2>
    `
    carritoContainer.append(carritoHeader);

    const carritoButton = document.createElement("h1");
    carritoButton.innerText = "X";
    carritoButton.className = "carrito-header-button"

    carritoButton.addEventListener("click", () => {
        carritoContainer.style.display = "none";
    });

    carritoHeader.append(carritoButton)

    carrito.forEach((item) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "carrito-content";
        carritoContent.innerHTML = `
        <img src="${item.imagen}"/>
        <h3>${item.nombre}</h3>
        <p>$${item.precio}</p>
        <button class = "eliminar-btn" data-id="${item.id}"> Eliminar </button>
        `;

        carritoContainer.append(carritoContent);
    });


    const botonesEliminar = document.querySelectorAll(".eliminar-btn");

    botonesEliminar.forEach(eliminarProducto => {
        eliminarProducto.addEventListener("click", () => {

            Swal.fire({
                title: "Eliminar Producto del Carrito?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#A5D272",
                cancelButtonColor: "#d33",
                confirmButtonText: "SI!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Producto Eliminado!",
                        icon: "success",
                        confirmButtonColor: "#A5D272",
                    });
                    const productoId = eliminarProducto.getAttribute('data-id');

                    const index = carrito.findIndex(item => item.id === productoId);

                    if (index == -1) {

                        carrito.splice(index, 1);

                        localStorage.setItem('carrito', JSON.stringify(carrito));

                        eliminarProducto.closest('.carrito-content').remove();

                        const total = carrito.reduce((acum, productoAgregado) => acum + productoAgregado.precio, 0);
                        document.querySelector('.total-content').innerHTML = `Total a Pagar: $${total}`;

                    };
                }
            });
        });
    });


    const total = carrito.reduce((acum, productoAgregado) => acum + productoAgregado.precio, 0);

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-content"
    totalCompra.innerHTML = `Total a Pagar: $${total}`;
    carritoContainer.append(totalCompra);

    localStorage.setItem('carrito', JSON.stringify(carrito));
});
