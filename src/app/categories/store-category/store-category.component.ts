import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/shared/category/category.service';

@Component({
  selector: 'app-store-category',
  templateUrl: './store-category.component.html',
  styleUrls: ['./store-category.component.css']
})
export class StoreCategoryComponent implements OnInit {

  id: any
  constructor(
    private fb: FormBuilder,
    private _category: CategoryService,
    private _activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this._checkEditmode();
  }

  categoryForm = this.fb.group({
    name: [null, Validators.required],
    color: [null, Validators.required],
    icon: [null, Validators.required],
    image: [null, Validators.required]

  });

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

  // Edit
  private _checkEditmode() {
    this._activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this._category.getCategoryById(this.id).subscribe((Ref: any) => {
        this.categoryForm.setValue({
          name: Ref.name,
          color: Ref.color,
          icon: Ref.icon,
          image: Ref.image,
        });
      })
    })
  }

  // Update
  updateCategory() {
    let Ref = this.categoryForm.value;
    let ObjRef = {
      name: Ref.name,
      color: Ref.color,
      icon: Ref.icon,
      image: Ref.image,
    }

    this._category.updateCategory(this.id, ObjRef).subscribe((res: any) => alert("Category Updated"));
    this.categoryForm.reset();
  }

}

