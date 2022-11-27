import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private strUrlApi:string;
  router: any;

  constructor(private http:HttpClient) {
    this.strUrlApi = '../../assets/data/user.json';
  }

public loginSimple (email: string, pwd: string): void {
  this.http.get(this.strUrlApi).subscribe(
    (response:any) => {
      if(response.token != null) {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard'])
      }
    }
  );
}

public logout(): void {
  //Al cerrar sesion eliminamos el token
  localStorage.removeItem('token');
  //Redireccionar
  this.router.navigate(['/']);
}

public isUserLogIn(): boolean {
  return (localStorage.getItem('token') != null);
}

  }