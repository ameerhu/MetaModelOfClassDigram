import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Product } from '../model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  searchTerm;
  products: Observable<Product[]>;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getAll();
  }

  search() {
    this.products = this.productService.getAll(this.searchTerm);
  }

}
