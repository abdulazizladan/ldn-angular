import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginData } from '../models/loginData.model';

@Injectable({
  providedIn: 'root'
})
export class RoleBasedAuthService {

  private readonly loginUrl: string = "./api//auth/login";
  private registerUrl: string = "./api/auth/register";

  constructor( private readonly http: HttpClient) { }

  login( userLoginData : loginData ){
    return this.http.post<any>(this.loginUrl, userLoginData)
  }

  register(){

  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token');
  }
}
