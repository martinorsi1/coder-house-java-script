let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


const agregarAlCarrito = (id) => {

    const productoAgregado = zapatillas.find((item) => item.id === id);

    if (productoAgregado) {
        if (productoAgregado.stock > 0) {
            carrito.push(productoAgregado);
            productoAgregado.stock--;
        };
        carritoCounter();
        localStorage.setItem('carrito', JSON.stringify(carrito));
    };
};


const verCarrito = document.getElementById("verCarrito");
const carritoContainer = document.getElementById("carritoContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");



const mostrarCarrito = () => {
    carritoContainer.innerHTML = "",
        carritoContainer.style.display = "flex";
    const carritoHeader = document.createElement("div");
    carritoHeader.className = "carrito-header"
    carritoHeader.innerHTML = `
    <h2 class = "carrito-header-title">CARRTIO DE COMPRAS</h2>
    `
    carritoContainer.append(carritoHeader);

    const carritoButton = document.createElement("img");
    carritoButton.src = "https://i.postimg.cc/MpYDkJd8/cruz.png";
    carritoButton.style.width = "5rem";
    carritoButton.style.height = "5rem";
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
        <button id = "botonesEliminar" class = "eliminar-btn" "${item.id}"> Eliminar </button>
        `;

        carritoContainer.append(carritoContent);


        let eliminar = document.getElementById("botonesEliminar");

        eliminar.addEventListener("click", () => {
            Swal.fire({
                title: "Eliminar Producto del Carrito?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#451952",
                cancelButtonColor: "#d33",
                confirmButtonText: "SI!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Producto Eliminado!",
                        icon: "success",
                        confirmButtonColor: "#451952",
                    });
                    eliminarProducto();
                }
            });
        });
    });

    const total = carrito.reduce((acum, productoAgregado) => acum + productoAgregado.precio, 0);

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-content"
    totalCompra.innerHTML = `Total a Pagar: $${total}`;
    carritoContainer.append(totalCompra);
};




const eliminarProducto = () => {
    const foundId = carrito.find((item) => item.id);
    //Uso el metodo find para buscar cual es el id del producto que el usuario quiere eliminar.
    carrito = carrito.filter((carritoId) => {
        //Con el metodo filter, filtro todos los productos del carrito que no tengan el id del producto que el usuario quiere.

        return carritoId !== foundId;
    });
    carritoCounter();
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
};


verCarrito.addEventListener("click", mostrarCarrito)

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
    if (carrito.length === 0) {
        cantidadCarrito.style.display = "none";
    };
};

carritoCounter();