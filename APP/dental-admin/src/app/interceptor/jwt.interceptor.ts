import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, throwError } from "rxjs";
import { catchError, switchMap, map } from "rxjs/operators";
import { JwtService } from "../services/api/jwt.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        public jwtService: JwtService
    ) { }

    private refreshSubject: Subject<any> = new Subject<any>();

    private refreshToken() {
        this.refreshSubject.subscribe({
            complete: () => {
                this.refreshSubject = new Subject<any>();
            }
        });
        if (this.refreshSubject.observers.length === 1) {
            this.jwtService.getToken("joedca86@gmail.com","quecosasno2").subscribe(this.refreshSubject);
        }
        return this.refreshSubject;
    }

    private checkTokenExpiryErr(error: HttpErrorResponse): boolean {
        return (
            error.status === 401
        );
    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((error, caught) => {
                console.log('entro error');
                if (error instanceof HttpErrorResponse) {
                    if (this.checkTokenExpiryErr(error)) {
                        return this.refreshToken().pipe(
                            map((token) => {
                                sessionStorage.setItem('token', token.token)
                            }),
                            switchMap(() => {
                                return next.handle(this.updateHeader(req));
                            })
                        );
                    } else {
                        return throwError(error);
                    }
                }
                return caught;
            })
        );
    }

    updateHeader(req) {
        req = req.clone({
            headers: req.headers.set("token", sessionStorage.getItem('token'))
        });
        return req;
    }
}
