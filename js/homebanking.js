//Declaración de variables
var nombreUsuario = "Christine Lagarde";
var saldoCuenta = 1000000;
var limiteExtraccion = 10000;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;

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
    alert("El saldo de su cuenta es de U$D:" + saldoCuenta +"\nUsted no puede extraer ese valor porque no dispone de esa suma de dinero en su cuenta.");
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

function pagarServicio() { //!hacerlo con switch
    var servicioAPagar = prompt("Por favor, indique el servicio que desea pagar: \n 1. Agua \n 2. Teléfono \n 3. Luz  \n 4. Internet")
    parseInt(servicioAPagar);
    if (servicioAPagar == 1) {
    restarDinero(agua);
    alert("Usted ha pagado el servicio de agua. Se han transferido U$D " + agua + " a la cuenta de AySA")
} else if (servicioAPagar == 2) {
    restarDinero(telefono);
    alert("Usted ha pagado el servicio de teléfono. Se han transferido U$D " + telefono + " a la cuenta de Telecom")
} else if (servicioAPagar == 3) {
    restarDinero(luz);
    alert("Usted ha pagado el servicio de luz. Se han transferido U$D " + luz + " a la cuenta de Edenor")
} else if (servicioAPagar == 4) {
    restarDinero(internet);
     alert("Usted ha pagado el servicio de Internet. Se han transferido U$D " + internet + " a la cuenta de Movistar")
}
actualizarSaldoEnPantalla();
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