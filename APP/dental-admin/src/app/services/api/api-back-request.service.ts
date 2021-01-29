import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ApiBackRequestService {

  constructor(
    private http: HttpClient,
  ) { }

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      // 'Access-Control-Allow-Headers': 'Content-Type',
      // 'Access-Control-Allow-Methods': 'GET, PUT, POST',
      // 'Access-Control-Allow-Origin': '*',
      "token":sessionStorage.getItem('token') || ""
    });
    console.log("token",sessionStorage.getItem('token'));
    return headers;
  }

  post(body: any, url: string): Observable<any> {
    return this.http.post(url, body, { headers: this.getHeaders() }).pipe(
      catchError(function (error: any) {
        if (error.status === 401) {
          //this.router.navigate(['/logout']);
        }
        return throwError(error);
      })
    );
  }

  put(body: any, url: string): Observable<any> {
    return this.http.put(url, body, { headers: this.getHeaders() }).pipe(
      catchError(function (error: any) {
        if (error.status === 401) {
          //this.router.navigate(['/logout']);
        }
        return throwError(error);
      })
    );
  }

  delete(url: string): Observable<any> {
    return this.http.delete(url, { headers: this.getHeaders() }).pipe(
      catchError(function (error: any) {
        if (error.status === 401) {
          //this.router.navigate(['/logout']);
        }
        return throwError(error);
      })
    );
  }

  get(url: string): Observable<any> {
    return this.http.get(url, { headers: this.getHeaders() }).pipe(
      catchError(function (error: any) {
        if (error.status === 401) {
          //this.router.navigate(['/logout']);
        }
        return throwError(error);
      })
    );
  }
}
