"use strict";
var Alumno = /** @class */ (function () {
    function Alumno(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.getApellido = function () {
        return this.apellido;
    };
    Alumno.prototype.getEdad = function () {
        return this.edad;
    };
    return Alumno;
}());
var miAlumno = new Alumno("Ivan", "Redondo", 21);
miAlumno.getNombre;
console.log(miAlumno.getNombre);
var miTrabajador = { id: 1, nombre: "Ivan", apellido: "Redondo" };
console.log(miTrabajador.apellido);
console.log(miTrabajador.nombre);
console.log(miTrabajador.id);
var trabajadores = [{ id: 1, nombre: "Ivan", apellido: "Redondo" },
    { id: 2, nombre: "Adrian", apellido: "Olmo" },
    { id: 3, nombre: "Raul", apellido: "Redondo" }];
console.log(trabajadores[0].apellido);
