import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  // private AUTH_URL = "http://localhost:8080/api/auth";

  private AUTH_URL = "https://wolmart.herokuapp.com/api/auth" //online

  constructor(private _http: HttpClient) { }

  login(user: any): Observable<any> {
    return this._http.post<any>(`${this.AUTH_URL}/login`, user);
  }

  singUp(user: any): Observable<any> {
    return this._http.post<any>(`${this.AUTH_URL}/signup`, user);
  }

  me(): Observable<any> {
    return this._http.get<any>(`${this.AUTH_URL}/me`);
  }

}
