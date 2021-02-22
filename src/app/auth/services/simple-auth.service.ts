import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginData } from '../models/loginData.model';

@Injectable({
  providedIn: 'root'
})
export class SimpleAuthService {

  private loginUrl: string;
  private registerUrl: string;

  constructor( private _http: HttpClient ){
    this.loginUrl = "";
    this.registerUrl = "";
  }

  login( loginUserData: loginData ){
    return this._http.post<any>(this.loginUrl, loginUserData);
  }

  register( registerData: any){
    return this._http.post<any>(this.registerUrl, registerData)
  }

}
