import { Component, Input } from '@angular/core';
import { Product, Customer } from '../model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;
  currentCustomer: Customer;
  email;

  constructor(private productService: ProductService) {
    this.currentCustomer = JSON.parse(localStorage.getItem('currentCustomer'));
  }

  // solve() {
  //   this.productService.solveProduct(this.product).subscribe(data => {
  //     this.product.solved = true;
  //   });
  // }

  // hasUpvoted() {
  //   return this.product.upvote.filter(customer => customer.customername === this.currentCustomer.customername).length > 0;
  // }

  // upvote() {
  //   this.productService.upvote(this.product, this.currentCustomer);
  // }

  // downvote() {
  //   this.productService.downvote(this.product, this.currentCustomer);
  // }
}
