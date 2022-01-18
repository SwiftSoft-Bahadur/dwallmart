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

  //Edit task
  editProduct(index: any) {
    console.log(index);
    this._router.navigate(['dashboard/update']);
  }


  //Update record
  // UpdateTask() {

  //   let formVal = this.userForm.value;
  //   let obj = {

  //     name: formVal.fname,
  //     task: formVal.ftask,
  //     deadline: formVal.fdeadline
  //   }

  //   this._todoListService.UpdateTodoLit(this._id, obj).subscribe((res) => {
  //     console.log(res);
  //   })

  //   if (true) {
  //     this.saveForm = true
  //     this.updateForm = false
  //   }

  // }


}
