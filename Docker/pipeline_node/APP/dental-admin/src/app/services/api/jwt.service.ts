
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http: HttpClient) { }

  public getToken(email:string,password:string): Observable<any> {
    var body = {
      email:email,
      password:password
    }
    return this.http.post(`${environment.ENDPOINT_API}/login`,body).pipe(
      catchError(function (error: any) {
        return throwError(error);
      })
    );
  }
}
