import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Doctor } from "../models/doctor";
import { DoctorService } from "./api/doctor.service";

@Injectable({
  providedIn: "root",
})
export class DoctorDataService {

  constructor(
    private doctorService: DoctorService
  ) { }

  public add(doctor: Doctor): Observable<any> {
    return this.doctorService.add(doctor);
  }

  public update(doctor: Doctor): Observable<any> {
    return this.doctorService.put(doctor.id,doctor);
  }

  public delete(id:number): Observable<any> {
    return this.doctorService.delete(id);
  }

  public get(id:number): Observable<any> {
    return this.doctorService.get(id);
  }

  public list(nombre:string): Observable<any> {
    return this.doctorService.list(nombre);
  }
}
