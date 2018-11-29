import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {
   product: Product;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
//    alert(this.product.id);
//console.log(this.route.snapshot.params.p)
this.product = JSON.parse(this.route.snapshot.params.p);
//alert(this.product.id);
console.log(this.product);
// alert(this.product);
    // this.product = this.route.snapshot.params.subscribe(
    //   params => {
    //     this.product = params['myProduct'];
    //     });
      // alert(this.product.id);
    
  }

}
