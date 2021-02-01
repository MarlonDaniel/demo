import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiBackRequestService } from "./api-back-request.service";
import { Doctor } from "src/app/models/doctor";
import { environment } from "src/environments/environment";

@Injectable()
export class DoctorService {

  constructor(
    private apiRequest: ApiBackRequestService
  ) { }

  add(doctor: Doctor): Observable<any> {
    return this.apiRequest.post(doctor, `${environment.ENDPOINT_API}/doctor`);
  }

  put(id: number, doctor: Doctor): Observable<any> {
    return this.apiRequest.put(doctor, `${environment.ENDPOINT_API}/doctor/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.apiRequest.delete(`${environment.ENDPOINT_API}/doctor/${id}`);
  }

  get(id: number): Observable<any> {
    return this.apiRequest.get(`${environment.ENDPOINT_API}/doctor/get/${id}`);
  }

  list(nombre:string): Observable<any> {
    return this.apiRequest.get(`${environment.ENDPOINT_API}/doctor/list/${nombre}`);
  }

}
