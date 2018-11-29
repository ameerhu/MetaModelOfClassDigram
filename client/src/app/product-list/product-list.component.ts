import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model';
import { Observable } from 'rxjs';
import { config } from '../config';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  searchTerm;
  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.productService.getAll();
    this.productService.products.subscribe(data => {
      this.products = data;
    });

    if(this.route.snapshot.params.d){
//      console.log(this.route.snapshot.params.d);
//console.log("In P-List If True"+this.route.snapshot.params.d);
//console.log('Url : localhost:4200/advSearch;d='+this.route.snapshot.params.d);
 //url : 'Url : http://localhost:4200/advSearch;d='+this.route.snapshot.params.d;
  let d = this.route.snapshot.params.d;
      this.productService.getAllByCriteria(this.route.snapshot.params.d);
      //this.router.navigateByUrl('localhost:4200/advSearch');
      this.router.navigate(['advSearch',{d:d}]);
      console.log("In P-List If True completed");
      //this.router.navigate(['advSearch']);
    }else
    this.productService.getAll();
    console.log("init end");
  }

  search() {
    this.productService.getAll(this.searchTerm);
  }

}
