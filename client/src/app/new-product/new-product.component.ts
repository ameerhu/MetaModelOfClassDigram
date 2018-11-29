import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../_services/product.service';
import { Router } from '@angular/router';
import { config } from '../config';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  categories = [
    'Electronic',
    'Clothing'
  ];
  newProduct: FormGroup;
  uploadedImages = [];
  config = config;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.newProduct = this.formBuilder.group({
      'description': ['', Validators.required],
      'title': ['', Validators.required],
      'price': ['', Validators.required],
      'location': ['', Validators.required],
      'category': ['', Validators.required],
      'createdBy': [currentUser],
      'createdAt': new Date(),
      'images': [''],
    });
  }

  createNewProduct() {
    this.newProduct.controls['images'].setValue(this.uploadedImages.map(i => i.location));
    this.productService.createProduct(this.newProduct.value)
      .subscribe(response => {
        this.router.navigate(['/']);
      });
  }

  onImageRemoved($event) {
    const imageName = $event.file.name;
    const imageSize = $event.file.size;
    this.uploadedImages = this.uploadedImages.filter(e => !(e.name === imageName && e.size === imageSize));
  }

  onImageUploaded($event) {
    const data = $event.serverResponse;
    if (data && data.status === 200) {
      this.uploadedImages.push(JSON.parse(data.response._body));
    }
  }

}
