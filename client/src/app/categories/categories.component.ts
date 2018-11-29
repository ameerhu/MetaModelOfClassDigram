import { Component, OnInit } from '@angular/core';
import { CategoryListService} from '../category-list.service';
import {Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories$: Object;

  constructor(private categories: CategoryListService) { }

  ngOnInit() {
    this.categories.getCategories().subscribe(
      categories => this.categories$ = categories
    )
  }

}
