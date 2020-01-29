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
