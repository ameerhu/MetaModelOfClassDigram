import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adv-search',
  templateUrl: './adv-search.component.html',
  styleUrls: ['./adv-search.component.css','../app.component.css']
})
export class AdvSearchComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let u = this.route.snapshot.params.d
  }

  advSearch(form: NgForm){
    //alert(this.postedDate+this.location+this.minPrice+this.maxPrice);
    //console.log(form.value);
    let d = JSON.stringify(form.value);
    //console.log(d);
    this.router.navigate(['list',{d:d}]);
    //console.log(location);
  }

}
