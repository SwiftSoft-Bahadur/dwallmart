import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { CategoryService } from 'src/app/shared/category/category.service';

@Component({
  selector: 'app-store-category',
  templateUrl: './store-category.component.html',
  styleUrls: ['./store-category.component.css']
})
export class StoreCategoryComponent {
  categoryForm = this.fb.group({
    name: [null, Validators.required],
    color: [null, Validators.required],
    icon: [null, Validators.required],
    image: [null, Validators.required],

  });

  constructor(private fb: FormBuilder, private _category: CategoryService) { }

  onSubmit(): void {
    let Ref = this.categoryForm.value;
    let ObjRef = {
      name: Ref.name,
      color: Ref.color,
      icon: Ref.icon,
      image: Ref.image,
    }
    this._category.storeCategory(ObjRef).subscribe((res: any) => alert("Category Stored"));
    this.categoryForm.reset();
  }
}

