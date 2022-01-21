import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/products/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totProducts:any
  totOrders: any
  totUsers: any
  totCategories: any

  constructor(private _product: ProductsService) { }

  ngOnInit(): void {
    this._product.totOrders().subscribe(res => this.totOrders = res);
    this._product.totProducts().subscribe(res => this.totProducts = res);
    this._product.totUsers().subscribe(res => this.totUsers = res);
    this._product.totCategories().subscribe(res => this.totCategories = res);
  }


}
