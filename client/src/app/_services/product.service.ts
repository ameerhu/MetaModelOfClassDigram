import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Product, Customer } from '../model';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  config = config.apiUrl;
  constructor(private http: HttpClient) { }

  getAll(searchTerm?) {
    if (searchTerm)  {
      return this.http.get<Product[]>(config.apiUrl + '/products?filter[where][name][like]=' + searchTerm);
    }
    return this.http.get<Product[]>(config.apiUrl + '/products');
  }

  createProduct(formData) {
    return this.http.post(config.apiUrl + '/products', formData);
  }

  // solveProduct(product: Product) {
  //   product.solved = true;
  //   return this.http.put(config.apiUrl + '/products', Product);
  // }

  // upvote(product: Product, customer: Customer) {
  //   product.upvote.push(customer);
  //   return this.http.put(config.apiUrl + '/products', Product);
  // }

  // downvote(product: Product, customer: Customer) {
  //   const index = product.upvote.findIndex(u => u.customername === customer.customername);
  //   if (index > -1) {
  //     product.upvote.splice(index, 1);
  //   }
  //   return this.http.put(config.apiUrl + '/products', Product);
  // }
}
