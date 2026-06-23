import { HttpClient } from '@angular/common/http';
import { Injectable, input, InputSignal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {




  constructor(private _HttpClient:HttpClient) { }

  getUserData():Observable<any>{
    return this._HttpClient.get('https://6a3a9205917c7b14c74dc8a6.mockapi.io/api/v1/users')
  }

  registerUser(userData:object):Observable<any>{
    return this._HttpClient.post('https://6a3a9205917c7b14c74dc8a6.mockapi.io/api/v1/users',userData)
  }

  loginUser(userData:object):Observable<any>{
    return this._HttpClient.post('https://6a3a9205917c7b14c74dc8a6.mockapi.io/api/v1/users/login',userData)
  }


}
