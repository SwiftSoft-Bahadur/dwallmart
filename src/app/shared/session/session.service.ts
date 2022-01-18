import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  getToken() {
    let user = localStorage.getItem('token');
    if (user) {
      return JSON.parse(user);
    }
  }

  setToken(user: any) {
    localStorage.setItem('token', JSON.stringify(user));
  }

  deleteUser() {
    localStorage.removeItem('token');
  }
  
  setAdmin(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getAdmin() {
    let user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
  }


}