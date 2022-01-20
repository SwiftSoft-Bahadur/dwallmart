import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/category/category.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  categories: any;
  constructor(private _category: CategoryService) { }
  ngOnInit(): void {
    this._category.getCategory().subscribe((res: any[]) => this.categories = res)
  }

  deletecategory(id: any) {
    this._category.deleteCategory(id).subscribe((res) => alert("Category is delete"));
  }



}
