
const allProducts = document.getElementById("allProducts");
allProducts.addEventListener("click", () => {

    let cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = "";

    zapatillas.forEach((item) => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
        <h3 class="card-h3">${item.nombre}</h3>
        <img class="card-img" src="${item.imagen}" alt="${item.nombre}" />
        <p class="card-h3">Precio: $${item.precio}</p>
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


const mujer = document.getElementById("mujer");
mujer.addEventListener("click", () => {
    let flitradoM = zapatillas.filter((item) => item.categoria === "MUJER");

    let cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = "";

    flitradoM.forEach((item) => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
        <h3 class="card-h3">${item.nombre}</h3>
        <img class="card-img" src="${item.imagen}" alt="${item.nombre}" />
        <p class="card-h3">Precio: $${item.precio}</p>
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


const hombre = document.getElementById("hombre");
hombre.addEventListener("click", () => {
    let flitradoH = zapatillas.filter((item) => item.categoria === "HOMBRE");

    let cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = "";

    flitradoH.forEach((item) => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
        <h3 class = card-h3 >${item.nombre}</h3>
        <img class = card-img src="${item.imagen}" alt="${item.nombre}" />
        <p class = card-h3>Precio: $${item.precio}</p>
        <button id=boton${item.id} class = card-btn>Agregar al Carrito</button>
        `;

        cardsContainer.append(div)

        const boton = document.getElementById(`boton${item.id}`)
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



const niños = document.getElementById("niños");
niños.addEventListener("click", () => {
    let flitradoN = zapatillas.filter((item) => item.categoria === "NIÑOS");

    let cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = "";

    flitradoN.forEach((item) => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
        <h3 class = card-h3 >${item.nombre}</h3>
        <img class = card-img src="${item.imagen}" alt="${item.nombre}" />
        <p class = card-h3>Precio: $${item.precio}</p>
        <button id=boton${item.id} class = card-btn>Agregar al Carrito</button>
        `;

        cardsContainer.append(div)

        const boton = document.getElementById(`boton${item.id}`)
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







