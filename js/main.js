let variableGlobal = 100;
let carrito = document.getElementById("carrito");

const vaciar = () => {
    variableGlobal = 0;

    carrito.innerHTML = `${variableGlobal}`;
}