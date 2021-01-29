import { Especialidad } from "./especialidad";

export interface Doctor {
    id:number,
    nombre:string,
    dni:string,
    fechanacimiento:Date,
    colegiatura:string,
    registroesp:string,
    sexo:string,
    idespecialidad:number,
    celular:string,
    email:string,
    idseguro:number,
    sueldo:number,
    especialidad?:Especialidad
}