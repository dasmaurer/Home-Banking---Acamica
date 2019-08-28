//Declaración de variables
var nombreUsuario = "Christine Lagarde";
var saldoCuenta = 10000;
var limiteExtraccion = 1000;
//Servicios
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
//Cuentas amigas
var cuentaAmiga1 = "1234567";
var cuentaAmiga2 = "7654321";
//Código de Seguridad
var codigoDeSeguridad = 1234;


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
    alert("Ha extraido la suma de U$D " + extraccion + " de su cuenta. \nSu saldo anterior era de:  U$D " + saldoAnterior + "\nSu saldo actual es de: U$D " + saldoCuenta);
    actualizarSaldoEnPantalla();
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
    var servicioAPagar = prompt("Por favor, indique el servicio que desea pagar: \n 1. Agua \n 2. Teléfono \n 3. Luz  \n 4. Internet")
    parseInt(servicioAPagar);
if  (saldoCuenta<agua || saldoCuenta<telefono || saldoCuenta<luz || saldoCuenta<internet){
    alert("No dispone de dinero suficiente para hacer el pago");
} else if (saldoCuenta>agua || saldoCuenta>telefono || saldoCuenta>luz || saldoCuenta>internet ){
  switch (servicioAPagar) {
        case "1":
            restarDinero(agua);
            alert("Usted ha pagado el servicio de agua. Se han transferido U$D " + agua + " a la cuenta de AySA");
        break;
        case "2":
            restarDinero(telefono);
            alert("Usted ha pagado el servicio de teléfono. Se han transferido U$D " + telefono + " a la cuenta de Telecom");
        break;
        case "3":
            restarDinero(luz);
            alert("Usted ha pagado el servicio de luz. Se han transferido U$D " + luz + " a la cuenta de Edenor");
        break;
        case "4":
            restarDinero(internet);
            alert("Usted ha pagado el servicio de Internet. Se han transferido U$D " + internet + " a la cuenta de Movistar")
        break;
        default:
            alert("El código igresado no está asociado a ningun servicio. \n Por favor ingrese un código válido");
        break;
    }
}
actualizarSaldoEnPantalla();
}


function transferirDinero() {
    var montoATransferir = prompt ("Ingrese el monto a transferir")
    parseInt(montoATransferir);
    if (montoATransferir>saldoCuenta) {
        alert("Usted no dispone suficiente dinero para realizar la transferencia. \nSu saldo es de: U$D" +saldoCuenta);
    } else if (isNaN(montoATransferir)) {
        alert("El monto ingresado no es un número");
    } else {
        console.log((montoATransferir))
        prompt("Por favor, ingrese el número de cuenta a la que desea transferirle U$D" + montoATransferir);
    switch ((cuentaAmiga1 || cuentaAmiga2)) {
        case "1234567":
            console.log("se ejecutó amiga1")
            restarDinero(montoATransferir);
            alert("Se ha transferido la suma de U$D" +montoATransferir+ "a" + cuentaAmiga1);
        break;
        case "7654321":
                console.log("se ejecutó amiga2")
            restarDinero(montoATransferir);
            alert("Se ha transferido la suma de U$D" + montoATransferir + "a" + cuentaAmiga2);
        break;
        case "!=1234567" && "!=7654321":
        alert("el numero ingresado no esta asociado a ninguna cuenta amiga");
        break;
    }
}
actualizarSaldoEnPantalla();
}



var codigoIngresado = prompt ("Por favor, ingrese el código de seguridad para operar");
parseInt(codigoIngresado);
if (codigoIngresado!=codigoDeSeguridad){
    alert("El código ingresado no corresponde al código que tenemos registrado. \n Por razones de seguridad el saldo de su cuenta ha sido retenido y no podrá operar en esta sesión");
    saldoCuenta = 0;
}else if (codigoIngresado==codigoDeSeguridad){
function iniciarSesion() {
 alert("Bienvenido/a" + nombreUsuario + "\nUsted puede comenzar a operar");
actualizarSaldoEnPantalla();
}
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