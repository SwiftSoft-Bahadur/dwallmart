import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { CategoryService } from 'src/app/shared/category/category.service';
import { ProductsService } from 'src/app/shared/products/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  productForm = this.fb.group({
    name: [null, Validators.required],
    description: [null, Validators.required],
    richDescription: [null, Validators.required],
    image: [null, Validators.required],
    brand: [null, Validators.required],
    price: [null, Validators.required],
    category: [null, Validators.required],
    countInStock: [null, Validators.required],
    isFeatured: [null],
    isNewarrival: [null],
    isBestseller: [null],
    isMostpopular: [null],
  });


  categories: any = [];

  constructor(private fb: FormBuilder, private _category: CategoryService, private _product: ProductsService) { }
  ngOnInit(): void {
    this._category.getCategory().subscribe((res: any) => this.categories = res)
  }

  onSubmit(): void {

    let Ref = this.productForm.value;
    let ObjRef = {
      name: Ref.name,
      description: Ref.description,
      richDescription: Ref.richDescription,
      image: Ref.image,
      brand: Ref.brand,
      price: Ref.price,
      category: Ref.category,
      countInStock: Ref.countInStock,
      isFeatured: Ref.isFeatured,
      isNewarrival: Ref.isNewarrival,
      isBestseller: Ref.isBestseller,
      isMostpopular: Ref.isMostpopular,
    }

    this._product.storeProduct(ObjRef).subscribe(res => {
      alert("Product stored")
    });
    this.productForm.reset();
  }


}
