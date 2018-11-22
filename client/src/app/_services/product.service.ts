import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Product, User } from '../model';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  config = config.apiUrl;
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Product[]>(config.apiUrl + '/products?filter[order]=createdAt%20DESC');
  }

  createProduct(formData) {
    return this.http.post(config.apiUrl + '/products', formData);
  }

  solveProduct(product: Product) {
    product.solved = true;
    return this.http.put(config.apiUrl + '/products', Product);
  }

  upvote(product: Product, user: User) {
    product.upvote.push(user);
    return this.http.put(config.apiUrl + '/products', Product);
  }

  downvote(product: Product, user: User) {
    const index = product.upvote.findIndex(u => u.username === user.username);
    if (index > -1) {
      product.upvote.splice(index, 1);
    }
    return this.http.put(config.apiUrl + '/products', Product);
  }
}
