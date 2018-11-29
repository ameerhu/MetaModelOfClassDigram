import { Component, Input } from '@angular/core';
import { Product, Customer } from '../model';
import { ProductService } from '../_services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;
  currentCustomer;

  constructor(
    private productService: ProductService,
    private router: Router) {

    this.currentCustomer = {
      name: 'Ammar Hasan',
      username: 'ammar94',
      avatar: 'https://secure.gravatar.com/avatar/8149de7ed3ea7fe8d638d98201443d5b?size=800',
      email: 'hasanammar94@gmail.com',
    };

  }

  detailProduct(product){
    let p = JSON.stringify(product);
    this.router.navigate(['searchDetail', {p:p}]);
  }

  buy() {
    // this.productService.solveProduct(this.product).subscribe(data => {
    //   this.product.solved = true;
    // });
  }

  hasWished() {
    // return this.product.wish.filter(customer => customer.customername === this.currentCustomer.customername).length > 0;
  }

  wish() {
    // this.productService.wish(this.product, this.currentCustomer);
  }

  unwish() {
    // this.productService.unwish(this.product, this.currentCustomer);
  }
}
