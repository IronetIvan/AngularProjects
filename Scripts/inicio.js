"use strict";
/*console.log("Hola mundo");
console.log("Este es un ejempplo de parrafo");
console.log("Este es un nuevo cambio");
let numero: number = 0;
let palabra: String = "hola";
console.log(numero);
console.log(palabra);*/
var nombre = "Ivan";
var apellido = "Redondo";
var edad = 21;
//console.log(nombre+" "+apellido+" "+edad);
console.log(nombre + " " + apellido);
var nota = 1;
/*if (nota>=5) {
    console.log("Has aprobado")
} else if (nota<5 && nota > 2){
    console.log("Has suspendido")
}else{
    console.log("Fatal")
}*/
switch (nota) {
    case 1:
        console.log("caso1");
        break;
    case 2:
        console.log("caso2");
        break;
    case 3:
        console.log("Resto de casos");
        break;
    default:
        break;
}
/*for (let index = 0; index < 10; index++) {
   console.log(`Elemento ${index}`);
}*/
var conjuntoPalabras = ["primero", "segundo", "trecero", "cuarto"];
console.log("<------------ Con for in (accedo a la posicion)-------------------->");
for (var key in conjuntoPalabras) {
    console.log(conjuntoPalabras[key]);
}
console.log("<--------------------- Con foreach flecha (key) -------------------->");
conjuntoPalabras.forEach(function (element) {
    console.log(element);
});
console.log("<--------------------- Con for of (element) -------------------->");
for (var _i = 0, conjuntoPalabras_1 = conjuntoPalabras; _i < conjuntoPalabras_1.length; _i++) {
    var iterator = conjuntoPalabras_1[_i];
    console.log(iterator);
}
console.log("<--------------------- Funciones -------------------->");
function funcionInicial(nombre) {
    console.log(nombre);
}
function funcionInicialParametros(nombre, apellido, edad) {
    console.log(nombre + " " + apellido + " " + edad);
}
function funcionRetorno(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}
function funcionCualquierParametro(params) {
    console.log(params);
}
funcionInicial("MiNombre");
funcionInicialParametros("Ivan", "Redondo", 21);
console.log(funcionRetorno(55, 57));
funcionCualquierParametro(2020); //Cualquier tipo de parametro ACCEPT
