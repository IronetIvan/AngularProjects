class Alumno{
    private nombre: string;
    private apellido: string;
    private edad:number;
    constructor(nombre:string, apellido:string, edad:number){
        this.nombre= nombre;
        this.apellido= apellido;
        this.edad= edad;
    }
    getNombre(): string{
        return this.nombre;
    }
    getApellido(): string{
        return this.apellido;
    }
    getEdad(): number{
        return this.edad;
    }

    
}

let miAlumno:Alumno = new Alumno(`Ivan`, `Redondo`, 21);
miAlumno.getNombre
console.log(miAlumno.getNombre);


interface trabajador{
    id:number;
    nombre:string;
    apellido:string;
}

let miTrabajador:trabajador = {id:1, nombre:"Ivan",apellido:"Redondo"};
console.log(miTrabajador.apellido)
console.log(miTrabajador.nombre)
console.log(miTrabajador.id)

let trabajadores : trabajador[] = [{id:1, nombre:"Ivan",apellido:"Redondo"},
{id:2, nombre:"Adrian",apellido:"Olmo"},
{id:3, nombre:"Raul",apellido:"Redondo"}];
console.log(trabajadores[0].apellido)
