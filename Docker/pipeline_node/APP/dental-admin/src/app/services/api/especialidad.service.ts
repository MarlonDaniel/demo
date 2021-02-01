import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiBackRequestService } from "./api-back-request.service";
import { environment } from "src/environments/environment";
import { Especialidad } from "src/app/models/especialidad";

@Injectable()
export class EspecialidadService {

  constructor(
    private apiRequest: ApiBackRequestService
  ) { }

  add(especialidad: Especialidad): Observable<any> {
    return this.apiRequest.post(especialidad, `${environment.ENDPOINT_API}/especialidad`);
  }

  put(id: number, especialidad: Especialidad): Observable<any> {
    return this.apiRequest.put(especialidad, `${environment.ENDPOINT_API}/especialidad/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.apiRequest.delete(`${environment.ENDPOINT_API}/especialidad/${id}`);
  }

  get(id: number): Observable<any> {
    return this.apiRequest.get(`${environment.ENDPOINT_API}/especialidad/get/${id}`);
  }

  list(nombre:string): Observable<any> {
    return this.apiRequest.get(`${environment.ENDPOINT_API}/especialidad/list/${nombre}`);
  }

}
