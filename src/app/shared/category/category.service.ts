import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // BASE_URL = "http://localhost:8080/api/category";
  BASE_URL = "https://wolmart.herokuapp.com/api/category";

  constructor(private http: HttpClient) { }

  getCategory(): Observable<any> {
    return this.http.get<any>(this.BASE_URL);
  }

  storeCategory(category: any): Observable<any> {
    return this.http.post<any>(this.BASE_URL, category);
  }

}
