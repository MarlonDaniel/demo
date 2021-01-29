import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Especialidad } from "../models/especialidad";
import { EspecialidadService } from "./api/especialidad.service";

@Injectable({
  providedIn: "root",
})
export class EspecialidadDataService {

  constructor(
    private especialidadService: EspecialidadService
  ) { }

  public add(especialidad: Especialidad): Observable<any> {
    return this.especialidadService.add(especialidad);
  }

  public update(especialidad: Especialidad): Observable<any> {
    return this.especialidadService.put(especialidad.id,especialidad);
  }

  public delete(id:number): Observable<any> {
    return this.especialidadService.delete(id);
  }

  public get(id:number): Observable<any> {
    return this.especialidadService.get(id);
  }

  public list(nombre:string): Observable<any> {
    return this.especialidadService.list(nombre);
  }
}
