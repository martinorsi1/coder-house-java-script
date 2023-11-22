
const allProducts = document.getElementById("allProducts");
allProducts.addEventListener("click", () => {
    document.getElementById("navbarNavDropdown").classList.remove("show");

    let cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = "";

    zapatillas.forEach((item) => {
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
        boton.addEventListener("click", () => agregarAlCarrito(item.id));
        boton.addEventListener("click", () => {
            Swal.fire({
                icon: "success",
                title: "Producto Agregado al Carrito",
                showConfirmButton: false,
                timer: 800
            });
        });
    });
});


// const mujer = document.getElementById("mujer");
// mujer.addEventListener("click", () => {
//     document.getElementById("navbarNavDropdown").classList.remove("show");

//     let flitradoM = zapatillas.filter((item) => item.categoria === "MUJER");

//     let cardsContainer = document.getElementById("cardsContainer");
//     cardsContainer.innerHTML = "";

//     flitradoM.forEach((item) => {
//         const div = document.createElement("div");
//         div.className = "card";
//         div.innerHTML = `
//         <div class="card-info">
//         <img class="card-img" src="${item.imagen}" alt="${item.nombre}" />
//         <h3 class="card-h3">${item.nombre}</h3>
//         <p class="card-h3">$${item.precio}</p>
//         </div>
//         <button id="boton${item.id}" class="card-btn">Agregar al Carrito</button>
//         `;

//         cardsContainer.append(div);

//         const boton = document.getElementById(`boton${item.id}`);
//         boton.addEventListener("click", () => agregarAlCarrito(item.id));
//         boton.addEventListener("click", () => {
//             Swal.fire({
//                 icon: "success",
//                 title: "Producto Agregado al Carrito",
//                 showConfirmButton: false,
//                 timer: 800
//             });
//         });
//     });
// });

function seccionMujer(id) {
    document.getElementById("navbarNavDropdown").classList.remove("show");

    let flitradoM = zapatillas.filter((item) => item.categoria === "MUJER");

    let cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = "";

    flitradoM.forEach((item) => {
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
        boton.addEventListener("click", () => agregarAlCarrito(item.id));
        boton.addEventListener("click", () => {
            Swal.fire({
                icon: "success",
                title: "Producto Agregado al Carrito",
                showConfirmButton: false,
                timer: 800
            });
        });
    });
}

// Asigna la función a ambos botones
const mujer = document.getElementById("mujer");
mujer.addEventListener("click", () => seccionMujer("mujer"));

const enlaceMujer = document.getElementById("enlaceMujer"); // Reemplaza "otroBoton" con el ID real de tu otro botón
enlaceMujer.addEventListener("click", () => seccionMujer("enlaceMujer"));


/* 
En este ejemplo, he creado una función seccionMujer que realiza la acción que compartes entre los dos botones.
Luego, asignamos esta función como manejador de eventos para ambos botones.
Asegúrate de reemplazar "otroBoton" con el ID real de tu otro botón-enlaceMujer
*/


// const hombre = document.getElementById("hombre");
// hombre.addEventListener("click", () => {
//     document.getElementById("navbarNavDropdown").classList.remove("show");


//     let flitradoH = zapatillas.filter((item) => item.categoria === "HOMBRE");

//     let cardsContainer = document.getElementById("cardsContainer");
//     cardsContainer.innerHTML = "";

//     flitradoH.forEach((item) => {
//         const div = document.createElement("div");
//         div.className = "card";
//         div.innerHTML = `
//         <div class="card-info">
//         <img class="card-img" src="${item.imagen}" alt="${item.nombre}" />
//         <h3 class="card-h3">${item.nombre}</h3>
//         <p class="card-h3">$${item.precio}</p>
//         </div>
//         <button id="boton${item.id}" class="card-btn">Agregar al Carrito</button>
//         `;

//         cardsContainer.append(div)

//         const boton = document.getElementById(`boton${item.id}`)
//         boton.addEventListener("click", () => agregarAlCarrito(item.id));
//         boton.addEventListener("click", () => {
//             Swal.fire({
//                 icon: "success",
//                 title: "Producto Agregado al Carrito",
//                 showConfirmButton: false,
//                 timer: 800
//             });
//         });
//     });
// });

// Función para manejar la acción común
function seccionHombre() {
    document.getElementById("navbarNavDropdown").classList.remove("show");

    let filtradoH = zapatillas.filter((item) => item.categoria === "HOMBRE");

    let cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = "";

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
        boton.addEventListener("click", () => agregarAlCarrito(item.id));
        boton.addEventListener("click", () => {
            Swal.fire({
                icon: "success",
                title: "Producto Agregado al Carrito",
                showConfirmButton: false,
                timer: 800
            });
        });
    });
}

// Asigna la función a ambos botones
const hombre = document.getElementById("hombre");
hombre.addEventListener("click", seccionHombre);

const enlaceHombre = document.getElementById("enlaceHombre"); // Reemplaza "otroBotonHombre" con el ID real de tu otro botón de la categoría "HOMBRE"-enlaceHombre
enlaceHombre.addEventListener("click", seccionHombre);


/* 
En este caso, he creado la función seccionHombre que realiza la acción específica para la categoría "HOMBRE".
Luego, asignamos esta función como manejador de eventos para ambos botones.

Asegúrate de reemplazar "otroBotonHombre" con el ID real de tu otro botón de la categoría "HOMBRE"-enlaceHombre.
Este enfoque te permite reutilizar la lógica y los estilos para diferentes botones de la misma categoría.
*/




// const niños = document.getElementById("niños");
// niños.addEventListener("click", () => {
//     document.getElementById("navbarNavDropdown").classList.remove("show");


//     let flitradoN = zapatillas.filter((item) => item.categoria === "NIÑOS");

//     let cardsContainer = document.getElementById("cardsContainer");
//     cardsContainer.innerHTML = "";

//     flitradoN.forEach((item) => {
//         const div = document.createElement("div");
//         div.className = "card";
//         div.innerHTML = `
//         <div class="card-info">
//         <img class="card-img" src="${item.imagen}" alt="${item.nombre}" />
//         <h3 class="card-h3">${item.nombre}</h3>
//         <p class="card-h3">$${item.precio}</p>
//         </div>
//         <button id="boton${item.id}" class="card-btn">Agregar al Carrito</button>
//         `;

//         cardsContainer.append(div)

//         const boton = document.getElementById(`boton${item.id}`)
//         boton.addEventListener("click", () => agregarAlCarrito(item.id));
//         boton.addEventListener("click", () => {
//             Swal.fire({
//                 icon: "success",
//                 title: "Producto Agregado al Carrito",
//                 showConfirmButton: false,
//                 timer: 800
//             });
//         });
//     });
// });

// Función para manejar la acción común
function seccionNiños() {
    document.getElementById("navbarNavDropdown").classList.remove("show");

    let filtradoN = zapatillas.filter((item) => item.categoria === "NIÑOS");

    let cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = "";

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
        boton.addEventListener("click", () => agregarAlCarrito(item.id));
        boton.addEventListener("click", () => {
            Swal.fire({
                icon: "success",
                title: "Producto Agregado al Carrito",
                showConfirmButton: false,
                timer: 800
            });
        });
    });
}

// Asigna la función a ambos botones
const niños = document.getElementById("niños");
niños.addEventListener("click", seccionNiños);

const enlaceNiños = document.getElementById("enlaceNiños"); // Reemplaza "otroBotonNiños" con el ID real de tu otro botón de la categoría "NIÑOS"-enlaceNiños
enlaceNiños.addEventListener("click", seccionNiños);


/* 
En este caso, he creado la función seccionNiños que realiza la acción específica para la categoría "NIÑOS".
Luego, asignamos esta función como manejador de eventos para ambos botones.

Asegúrate de reemplazar "otroBotonNiños" con el ID real de tu otro botón de la categoría "NIÑOS"-enlaceNiños.
Este enfoque te permite reutilizar la lógica y los estilos para diferentes botones de la misma categoría.
*/





