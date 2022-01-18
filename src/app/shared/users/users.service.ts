import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // AUTH_URL: any = "http://localhost:8080/api/user";
  AUTH_URL: any = "https://wolmart.herokuapp.com/api/user";
  constructor(private _http: HttpClient) { }

  GetUsers(): Observable<any> {
    return this._http.get<any>(this.AUTH_URL);
  }

  deleteUser(id: any): Observable<any> {
    return this._http.delete<any>(`${this.AUTH_URL}/${id}`)
  }

}
