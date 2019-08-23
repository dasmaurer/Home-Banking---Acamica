//Declaración de variables
var nombreUsuario = "Christine Lagarde";
var saldoCuenta = 1000000;
var limiteExtraccion = 10000;


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

function restarDinero(dineroARestar) {
    saldoCuenta = saldoCuenta - dineroARestar;
}

function cambiarLimiteDeExtraccion() {
    var nuevoLimiteExtraccion = prompt("Por favor, indique el nuevo límite de de extracción");
    parseInt (nuevoLimiteExtraccion);
    (limiteExtraccion = nuevoLimiteExtraccion)
    alert("Usted ha modificado su límite de extracción. \nAhora puede extraer hasta U$D" +nuevoLimiteExtraccion);
    actualizarLimiteEnPantalla();
}

function extraerDinero() {  
    var extraccion = prompt("Por favor, indique la suma a extraer:");
    parseInt (extraccion);
    if (extraccion > saldoCuenta){
    alert("El saldo de su cuenta es de U$D:" + saldoCuenta +"\nUsted no puede extraer ese valor porque no dispone de esa suma de niero en su cuenta.");
 } else if (extraccion > limiteExtraccion){
    alert("El límite de extracción es de U$D" + limiteExtraccion);
 } else if (extraccion % 100 !=0){
     alert("El monto no puede ser entregado en billetes de U$D 100");
 } else {
    var saldoAnterior = saldoCuenta;
    restarDinero(dineroARestar = extraccion);
    actualizarSaldoEnPantalla();
    alert("Ha extraido la suma de U$D " + extraccion + " de su cuenta. \nSu saldo anterior era de:  U$D " + saldoAnterior + "\nSu saldo actual es de: U$D " + saldoCuenta);
    }
}



function depositarDinero() {
    var deposito = prompt ("Por favor, indique la suma a depositar:");
    parseInt (deposito);
    var saldoAnterior = saldoCuenta;
    sumarDinero(dineroASumar = deposito);
alert("Ha depositado la suma de U$D " + deposito + " en su cuenta. \nSu saldo anterior era de:  U$D " + saldoAnterior + "\nSu saldo actual es de: U$D " + saldoCuenta);
actualizarSaldoEnPantalla();

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