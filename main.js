
const allProducts = document.getElementById("allProducts");
allProducts.addEventListener("click", () => {
    document.getElementById("navbarNavDropdown").classList.remove("show");

    let cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = "";

    const productosIdex = async () => {
        try {
            const response = await fetch(`./data.json`);
            const data = await response.json();

            data.forEach((item) => {
                const div = document.createElement("div");
                div.className = "card";
                div.innerHTML = `
                <div class="card-info">
                <img class="card-img" src="${item.imagen}" alt="${item.nombre}" />
                <h3 class="card-h3">${item.nombre}</h3>
                <p class="card-h3">$${item.precio}</p>
                </div>
                <button id="boton${item.id}" class="card-btn">Agregar al Carrito</button>
                `;

                cardsContainer.append(div);

                const boton = document.getElementById(`boton${item.id}`);
                boton.addEventListener("click", () => {
                    item.stock > 0
                        ? (agregarAlCarrito(item.id),
                            Swal.fire({
                                icon: "success",
                                title: "Producto Agregado al Carrito",
                                showConfirmButton: false,
                                timer: 800,
                            }))
                        : Swal.fire({
                            icon: "error",
                            title: "Oops... Lo sentimos, stock no disponible!",
                            confirmButtonColor: "#451952",
                        });
                });

            });
            const agregarAlCarrito = (id) => {

                const productoAgregado = data.find((item) => item.id === id);

                if (productoAgregado) {
                    if (productoAgregado.stock > 0) {
                        carrito.push(productoAgregado);
                        productoAgregado.stock--;
                    };
                    carritoCounter();
                    localStorage.setItem('carrito', JSON.stringify(carrito));
                };
            };
        }
        catch (error) {
            console.log(error);
        }
    };
    productosIdex()
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Función para manejar la acción común
function seccionMujer(id) {
    document.getElementById("navbarNavDropdown").classList.remove("show");

    let cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = "";

    const mujerIndex = async () => {
        try {
            const response = await fetch(`./data.json`);
            const data = await response.json();

            let filtradoM = data.filter((item) => item.categoria === "MUJER");

            filtradoM.forEach((item) => {
                const div = document.createElement("div");
                div.className = "card";
                div.innerHTML = `
                    <div class="card-info">
                        <img class="card-img" src="${item.imagen}" alt="${item.nombre}" />
                        <h3 class="card-h3">${item.nombre}</h3>
                        <p class="card-h3">$${item.precio}</p>
                    </div>
                    <button id="boton${item.id}" class="card-btn custom-button">Agregar al Carrito</button>
                `;

                cardsContainer.append(div);

                const boton = document.getElementById(`boton${item.id}`);
                boton.addEventListener("click", () => {
                    if (item.stock > 0) {
                        agregarAlCarrito(item.id);
                        Swal.fire({
                            icon: "success",
                            title: "Producto Agregado al Carrito",
                            showConfirmButton: false,
                            timer: 800
                        });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Oops... Lo sentimos, stock no disponible!",
                            confirmButtonColor: "#451952",
                        });
                    }
                });
            });

            const agregarAlCarrito = (id) => {

                const productoAgregado = data.find((item) => item.id === id);

                if (productoAgregado) {
                    if (productoAgregado.stock > 0) {
                        carrito.push(productoAgregado);
                        productoAgregado.stock--;
                    };
                    carritoCounter();
                    localStorage.setItem('carrito', JSON.stringify(carrito));
                };
            };
        }
        catch (error) {
            console.log(error);
        }
    };
    mujerIndex();
};

// Asigna la función a ambos botones
const mujer = document.getElementById("mujer");
mujer.addEventListener("click", () => seccionMujer("mujer"));

const enlaceMujer = document.getElementById("enlaceMujer"); // Reemplaza "otroBoton" con el ID real de tu otro botón
enlaceMujer.addEventListener("click", () => seccionMujer("enlaceMujer"));


/* 
En este ejemplo, he creado una función seccionMujer que realiza la acción que compartes entre los dos botones.
Luego, asignamos esta función como manejador de eventos para ambos botones.
*/



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Función para manejar la acción común
function seccionHombre() {
    document.getElementById("navbarNavDropdown").classList.remove("show");

    let cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = "";

    const hombreIndex = async () => {
        try {
            const response = await fetch(`./data.json`);
            const data = await response.json();

            let filtradoH = data.filter((item) => item.categoria === "HOMBRE");

            filtradoH.forEach((item) => {
                const div = document.createElement("div");
                div.className = "card";
                div.innerHTML = `
                    <div class="card-info">
                        <img class="card-img" src="${item.imagen}" alt="${item.nombre}" />
                        <h3 class="card-h3">${item.nombre}</h3>
                        <p class="card-h3">$${item.precio}</p>
                    </div>
                    <button id="boton${item.id}" class="card-btn custom-button">Agregar al Carrito</button>
                `;

                cardsContainer.append(div);

                const boton = document.getElementById(`boton${item.id}`);
                boton.addEventListener("click", () => {
                    if (item.stock > 0) {
                        agregarAlCarrito(item.id);
                        Swal.fire({
                            icon: "success",
                            title: "Producto Agregado al Carrito",
                            showConfirmButton: false,
                            timer: 800
                        });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Oops... Lo sentimos, stock no disponible!",
                            confirmButtonColor: "#451952",
                        });
                    }
                });
            });
            const agregarAlCarrito = (id) => {

                const productoAgregado = data.find((item) => item.id === id);

                if (productoAgregado) {
                    if (productoAgregado.stock > 0) {
                        carrito.push(productoAgregado);
                        productoAgregado.stock--;
                    };
                    carritoCounter();
                    localStorage.setItem('carrito', JSON.stringify(carrito));
                };
            };
        }
        catch (error) {
            console.log(error);
        }
    };
    hombreIndex();
};

// Asigna la función a ambos botones
const hombre = document.getElementById("hombre");
hombre.addEventListener("click", seccionHombre);

const enlaceHombre = document.getElementById("enlaceHombre"); // Reemplaza "otroBotonHombre" con el ID real de tu otro botón de la categoría "HOMBRE"-enlaceHombre
enlaceHombre.addEventListener("click", seccionHombre);



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Función para manejar la acción común
function seccionNiños() {
    document.getElementById("navbarNavDropdown").classList.remove("show");

    let cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = "";

    const niñosIndex = async () => {
        try {
            const response = await fetch(`./data.json`);
            const data = await response.json();

            let filtradoN = data.filter((item) => item.categoria === "NIÑOS");

            filtradoN.forEach((item) => {
                const div = document.createElement("div");
                div.className = "card";
                div.innerHTML = `
                    <div class="card-info">
                        <img class="card-img" src="${item.imagen}" alt="${item.nombre}" />
                        <h3 class="card-h3">${item.nombre}</h3>
                        <p class="card-h3">$${item.precio}</p>
                    </div>
                    <button id="boton${item.id}" class="card-btn custom-button">Agregar al Carrito</button>
                `;

                cardsContainer.append(div);

                const boton = document.getElementById(`boton${item.id}`);
                boton.addEventListener("click", () => {
                    if (item.stock > 0) {
                        agregarAlCarrito(item.id);
                        Swal.fire({
                            icon: "success",
                            title: "Producto Agregado al Carrito",
                            showConfirmButton: false,
                            timer: 800
                        });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Oops... Lo sentimos, stock no disponible!",
                            confirmButtonColor: "#451952",
                        });
                    }
                });
            });
            const agregarAlCarrito = (id) => {

                const productoAgregado = data.find((item) => item.id === id);

                if (productoAgregado) {
                    if (productoAgregado.stock > 0) {
                        carrito.push(productoAgregado);
                        productoAgregado.stock--;
                    };
                    carritoCounter();
                    localStorage.setItem('carrito', JSON.stringify(carrito));
                };
            };
        }
        catch (error) {
            console.log(error);
        }
    };
    niñosIndex();
};

// Asigna la función a ambos botones
const niños = document.getElementById("niños");
niños.addEventListener("click", seccionNiños);

const enlaceNiños = document.getElementById("enlaceNiños"); // Reemplaza "otroBotonNiños" con el ID real de tu otro botón de la categoría "NIÑOS"-enlaceNiños
enlaceNiños.addEventListener("click", seccionNiños);


//Promesa
const alertaWhatsapp = document.getElementById("alertaWhatsapp");
alertaWhatsapp.style.display = "none";

const alertaWhatsappPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 5000);
    });
};

alertaWhatsappPromise()
    .then(() => {
        const alertaWhatsapp = document.getElementById("alertaWhatsapp");
        alertaWhatsapp.style.display = "flex";

        const alertaWhatsappContainer = document.createElement("div");
        alertaWhatsappContainer.className = "alerta-whatsapp-container";
        alertaWhatsappContainer.innerHTML = `
            <div>
                <a href="https://web.whatsapp.com/" target="_blank">
                    <img src="./assets/redes/wpp.png" alt="Whatsapp" class="social-wpp">
                </a>
            </div>
        `;
        alertaWhatsapp.append(alertaWhatsappContainer);
    })
    .catch((error) => {
        const errorDiv = document.createElement("div");
        errorDiv.innerHTML = `
            Error: ${error}
        `;
        alertaWhatsapp.append(errorDiv);
    });








    
// alert("A continuacion elija el Metodo de Pago para realizar la compra");
// let metodoDePago = Number(prompt("Metodo de Pago:1-Transferencia Bancaria 2-Trarjeta de Credito"));

// while (metodoDePago != 1 && metodoDePago != 2) {
//     alert("Por favor Ingrese el Numero correcto de la opcion deseada");
//     metodoDePago = Number(prompt("Metodo de Pago:1-Tranferencia Bancaria 2-Trarjeta de Credito"));
// };

// switch (metodoDePago) {
//     case 1:
//         alert(`Haz elegido la opcion Tranferencia bancaria. El precio final es de $${total} UYU`);
//         break;

//     case 2:
//         alert("Haz elegido la opcion Tarjeta de Credito, lo cual genera un aumento del precio final de las Zapas!");

//         let numeroCuotas = Number(prompt("Por favor elija la cantidad de cuotas a Pagar: 2  4  6  10"));

//         while (numeroCuotas != 2 && numeroCuotas != 4 && numeroCuotas != 6 && numeroCuotas != 10) {
//             alert("Por favor elija la cantidad correcta de cuotas");
//             numeroCuotas = Number(prompt("Por favor elija la cantidad de cuotas a Pagar: 2  4  6  10"));
//         }

//         let precioAumento;

//         switch (numeroCuotas) {
//             case 2:
//                 precioAumento = aumento(total, aumento1);
//                 alert(`Perfecto, el precio final es de $${precioAumento} UYU`);
//                 break;

//             case 4:
//                 precioAumento = aumento(total, aumento2);
//                 alert(`Perfecto, el precio final es de $${precioAumento} UYU`);
//                 break;

//             case 6:
//                 precioAumento = aumento(total, aumento3);
//                 alert(`Perfecto, el precio final es de $${precioAumento} UYU`);
//                 break;

//             case 10:
//                 precioAumento = aumento(total, aumento4);
//                 alert(`Perfecto, el precio final es de $${precioAumento} UYU`);
//                 break;
//         }
//         break;
// };