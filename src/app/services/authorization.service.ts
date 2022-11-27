import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private strUrlApi:string;

  constructor(private http:HttpClient) {
    this.strUrlApi = '../../assets/data/user.json';
  }



  }