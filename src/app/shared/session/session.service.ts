import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  getToken() {
    let user = sessionStorage.getItem('token');
    if (user) {
      return JSON.parse(user);
    }
  }

  setToken(user: any) {
    sessionStorage.setItem('token', JSON.stringify(user));
  }

  deleteUser() {
    sessionStorage.removeItem('token');
  }
  
  setAdmin(user: any) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  getAdmin() {
    let user = sessionStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
  }


}