import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginData } from '../models/loginData.model';

@Injectable({
  providedIn: 'root'
})
export class SimpleAuthService {

  private readonly loginUrl: string = "./api//auth/login";
  private registerUrl: string = "./api/auth/register";

  constructor( private readonly _http: HttpClient ){

  }

  login( loginUserData: loginData ){
    return this._http.post<any>(this.loginUrl, loginUserData);
  }

  register( registerData: any){
    return this._http.post<any>(this.registerUrl, registerData)
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

}
