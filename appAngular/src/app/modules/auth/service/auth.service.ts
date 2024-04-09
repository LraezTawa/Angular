
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie';
import { environment } from '../../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = environment.api;
  constructor(private httpClient:HttpClient, private cookieService:CookieService) { }

  submitLogin(credentials:{idColaborador:any, password:string}):Observable<any> {
   return this.httpClient.post(
     `${this.URL}/usuario/login`,
     credentials)
     .pipe(
       tap((stream:any) => {
        const {tokenSession} = stream;
        this.cookieService.put('token_session',tokenSession,{
          path:'/'
        })
        console.log('este debe ser el token: ',tokenSession);
       }),
       catchError(() => {
        console.log('Algo ocurrio?? fijate')
        return of([])
      })
     )
  }

  uniqueEmailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return of(control.value).pipe(
        delay(500),
        map((email) => {
          const emails = ['test@test.com', 'hola@gmail.com'];
          return emails.includes(email);
        })
      ).pipe(
        map((exists) => (exists ? { emailExists: true } : null)),
        catchError(async () => null)
      );
    };
  }
}