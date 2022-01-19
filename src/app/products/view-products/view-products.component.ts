import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/products/products.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductComponent implements OnInit {
  nameSearch: any
  products: any;
  constructor(private _productService: ProductsService, private _router: Router) { }

  ngOnInit(): void {
    this._productService.getProduct().subscribe((res: any[]) => this.products = res)
  }


  deleteProduct(id: any) {
    this._productService.deleteProduct(id).subscribe(res => {
      window.location.reload();
    })
  }






}
