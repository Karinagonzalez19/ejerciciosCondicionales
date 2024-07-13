//ejercicio uno
let n1 = parseInt(prompt("escriba un numero :"))
let n2 = parseInt(prompt("escriba otro numero :"))

if (n1 > n2) {
    console.log("el primer numero es mayor que el segundo");
}else if (n1 === n2) {
    console.log("todos son iguales");
}else{
    console.log("el primer numero no es mayor que el segundo");
}
//ejercicio dos
let numero1 = parseInt(prompt("Escriba el primer numero :"))
let numero2 = parseInt(prompt("Escriba otro numero :"))

if (numero1 === numero2) {
    console.log("los numeros son iguales");
}else{
    console.log("los numeros son diferente");
}
//ejercicio tres
let numeroA = parseInt(prompt("Escriba un numero por favor :"))
let numeroB = parseInt(prompt("Escribas otro numero por favor :"))

if (numeroA > numeroB) {
    console.log("El primer numero es mas grande");
}else if (numeroA == numeroB) {
    console.log("Los numeros son iguales");
}else{
    console.log("El primer numero es menor que el segundo");
}
//ejercicio cuatro
n1 = parseInt(prompt("escriba un numero :"))
n2 = parseInt(prompt("escriba otro numero :"))
let n3 = parseInt(prompt("escriba otro numero :"))

if (n1 < n2 && n1 < n3) {
    console.log("el primero es el numero mas chico");
}else if (n2 < n1 && n2 < n3) {
    console.log("el segundo es el mas chico");
}else if (n3 < n1 && n3 < n2) {
    console.log("el tercero es el numero mas chico");

console.log("tiene dos numeros chicos iguales");
}
//ejercicio cinco
let persona1 = {
    nombre: prompt("escriba su nombre :"),
    edad: parseInt(prompt("escriba sus anios :")),
    altura: parseInt(prompt("escriba su altura :"))
}
let persona2 = {
    nombre: prompt("escriba su nombre :"),
    edad: parseInt(prompt("escriba sus anios :")),
    altura: parseInt(prompt("escriba su altura :"))
}
if (persona1.altura < persona2.altura) {
    console.log("la persona dos es la mas alta");
}else if (persona2.altura < persona1.altura) {
    console.log("la persona uno es la mas alta");
    console.log("poseen la misma altura");
}
if (persona1.edad < persona2.edad) {
    console.log("la persona dos es la de mayor anios");
}else if (persona2.edad < persona1.edad) {
    console.log("la persona uno es la de mayor anios");
    console.log("poseen los mismos anios");
}
//ejercicio 6
let nombre = prompt("ingrese su nombre :")
let edad = parseInt(prompt("ingrese sus anios :"))
let altura = parseInt(prompt("ingrese su altura :"))
let vision = parseInt(prompt("ingrese su vision :"))

if (edad >= 18 && altura >= 150 && vision >= 8) {
    console.log(" si estas capacitado para conducir");
    console.log("no estas capacitado para conducir, no cumple");
}
//ejercicio 7
nombre = prompt("ingrese su nombre :")
let pase = prompt("ingrese si es normal o vip")
let entrada = prompt("si tiene entrada escriba si en caso contrario escriba no")

if (nombre === "karina" || pase === "vip") {
    console.log("bienvenido tienes ingreso libre");
}else if (entrada === "si") {
    entrada = prompt("si desea utilizarla escriba si en caso contrario no")
    if (entrada === "si") {
        console.log("bienvenido tienes ingreso libre");
        console.log("gracias, adios");
    }

let comprarEntrada = prompt("¿Desea comprar la entrada?")
    if (comprarEntrada === "si") {
        comprarEntrada = parseInt(prompt("¿cuanto es su dinero disponible"))
        if (comprarEntrada >= 1000) {
            console.log("compra exitosa");
            console.log("bienvenido");
            console.log("compra rechazada");
        }
            console.log("gracias, adios");
    }
}
//ejercicio ocho
let numeroIncognita = 7
let numeroIngresado = parseInt(prompt("esciba un numero del 1 al 10, tiene 3 intentos"))

if (numeroIngresado != numeroIncognita) {
    if (numeroIngresado > numeroIncognita) {
        numeroIngresado = parseInt(prompt("el numero ingresado es mayor, vuelve a internarlo"))
    
        numeroIngresado = parseInt(prompt("el numero ingresado es menor, vuelve a intentarlo"))
    }
}
if (numeroIngresado != numeroIncognita) {
    if (numeroIngresado > numeroIncognita) {
        numeroIngresado = parseInt(prompt("el numero ingresado es mayor, vuelve a internarlo"))
    
        numeroIngresado = parseInt(prompt("el numero ingresado es menor, vuelve a intentarlo"))
    }
}
if (numeroIngresado != numeroIncognita) {
    console.log("perdiste");

    console.log("Ganaste, haz adivinado el número")
}
//ejercicio nueve
anios = parseInt(prompt("ingrese los anios a verificar :"))

if (anios >= 0 && anios <= 12) {
    console.log("eres un infante")
}else if (anios >= 13 && anios <= 18) {
    console.log("eres un adolescente");
}else if (anios >= 19 && anios <= 45) {
    console.log("eres mayor joven");
}else if (anios >= 45 && anios <= 100) {
    console.log("eres un anciano");

    console.log("¿en realidad tiene esos años?");
}
//ejercicio diez
let play1 = prompt("escriba la opcion que desea entre piedra, papel o tijera del play1")
let play2 = prompt("escriba la opcion que desea entre piedra, papel o tijera del play2")

if (play1 === "piedra" && play2 === "tijera") {
    console.log("gana play 1");
}else if (play1 === "papel" && play2 === "piedra") {
    console.log("gana play 1");
}else if (play1 === "tijera" && play2 === "papel") {
    console.log("gana play 1");
}else if (play2 === "piedra" && play1 === "tijera") {
    console.log("gana play 2");
}else if (play2 === "papel" && play1 === "piedra") {
    console.log("gana play 2");
}else if (play2 === "tijera" && play1 === "papel") {
    console.log("gana play 2");
}else if (play1 === play2) {
    console.log("empate");
    console.log("uno de los jugadores ha hecho trampa");
}
//ejercicio once
let colores = prompt("escriba un color :")
switch (colores) {
    case "blanco":
    case "negro":
        console.log("falta de color")
        break;
    case "verde":
        console.log("color de la naturaleza")
        break;
    case "azul":
        console.log("el color del agua")
        break;
    case "amarillo":
        console.log("el color del sol")
        break;
    case "rojo":
        console.log("el color del fuego");
        break
    case "marron":
        console.log("el color de la tierra");
        break
    default:
        console.log("Excelente elección, no lo teníamos pensado");
        break;
}
//ejercicio doce
let operacion = prompt("escriba una operacion :")
let num1 = parseInt(prompt("ingrese un valor :"))
let num2 = parseInt(prompt("ingrese otro valor :"))

let respuesta;

switch (operacion) {
    case "suma":
        respuesta = num1 + num2
        console.log("la suma de " + num1 + " + " + num2 + "es igual a" + respuesta);
        break;
    case "resta":
        respuesta = num1 - num2
        console.log("la resta de " + num1 + " - " + num2 + "es igual a" + respuesta);
        break;
    case "multiplicacion":
        respuesta = num1 * num2
        console.log("el producto de " + num1 + " * " + num2 + "es igual a" + respuesta);
        break;

    case "division":
        if (num2 === 0) {
            console.log("error");
        
        respuesta = num1 / num2;
            console.log("el resultado de la division" + num1 + " / " + num2 + "es igual a" + respuesta);
        }
        break;
    default:
        break;
}
//ejercicio trece
let cedula = parseInt(prompt("escriba su documento :"))
let nombreCompleto = prompt("escriba su nombre completo :")
let rh = prompt("escriba su tipo de sangre")
let fechaNacimiento = prompt("escriba su fecha de nacimiento (dia/mes/año) :")
let lugarNacimiento = prompt("escriba su lugar de nacimiento :")
let estatura = prompt("escriba su estatura :")
let sexo = prompt("escriba m  si es masculino 0 f si es femenino :")
let fechaExpedicion = prompt("escriba fecha de expedicion (dia/mes/año) :")
let lugarExpedicion = prompt("escriba en donde fue expedida :")
console.log(cedula);
console.log(nombreCompleto);
console.log(rh);
console.log(fechaNacimiento);
console.log(lugarNacimiento);
console.log(estatura);
console.log(sexo);
console.log(fechaExpedicion);
console.log(lugarExpedicion);

let datos = prompt("¿estan correctos los datos? marque si o no")

if (datos === "si") {

    let dni = {
        Cedula: cedula,
        NombreCompleto: nombreCompleto,
        Rh: rh,
        FechaNacimiento: fechaNacimiento,
        LugarNacimiento: lugarNacimiento,
        Estatura: estatura,
        Sexo: sexo,
        FechaExpedicion: fechaExpedicion,
        LugarExpedicion: lugarExpedicion,
    }
    console.table(dni)
    console.log("Registro exitoso")
}else if (datos === "no") {
    console.log("vuelve a intentarlo en 1 mes");

console.log("no es permitido escriba si o no");
}



