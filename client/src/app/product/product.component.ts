import { Component, Input } from '@angular/core';
import { Product, User } from '../model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;
  currentUser: User;
  email;

  constructor(private productService: ProductService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  solve() {
    this.productService.solveProduct(this.product).subscribe(data => {
      this.product.solved = true;
    });
  }

  hasUpvoted() {
    return this.product.upvote.filter(user => user.username === this.currentUser.username).length > 0;
  }

  upvote() {
    this.productService.upvote(this.product, this.currentUser);
  }

  downvote() {
    this.productService.downvote(this.product, this.currentUser);
  }
}
