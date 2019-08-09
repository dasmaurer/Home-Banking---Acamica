//Declaración de variables
var nombreUsuario = "Christine Lagarde";
var saldoCuenta = 1000000000;
var limiteExtraccion = 1000000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function sumarDinero(dineroASumar) {
    saldoCuenta = saldoCuenta + dineroASumar;
}

function restarDiner(dineroARestar) {
    saldoCuenta = saldoCuenta - dineroARestar;
}

function cambiarLimiteDeExtraccion() {

}

function extraerDinero() {

}

function depositarDinero() {
    var deposito = prompt parseInt ("depositar valor:");

}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}