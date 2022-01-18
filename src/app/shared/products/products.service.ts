import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // BASE_URL = "http://localhost:8080/api/product"
  BASE_URL = "https://wolmart.herokuapp.com/api/product"
  constructor(private http: HttpClient) { }

  storeProduct(objRef: any): Observable<any> {
    return this.http.post<any>(this.BASE_URL, objRef);
  }

  getProduct(): Observable<any> {
    return this.http.get<any>(this.BASE_URL);
  }

  deleteProduct(productId: any) {
    return this.http.delete(`${this.BASE_URL}/${productId}`);
  }

  updateProduct(id: any, ObjRef: any) {
    return this.http.patch(`${this.BASE_URL}/${id}`, ObjRef);
  }


  totProducts(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/products`);
  }
  totOrders(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/orders`);
  }
  totUsers(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/users`);
  }

  totCategories(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/categories`);
  }

}
