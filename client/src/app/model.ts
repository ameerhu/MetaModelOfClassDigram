export class Customer {
  constructor(
    public id?: String,
    public firstName?: String,
    public lastName?: String,
    public address?: String,
    public phone?: String,
    public email?: String,
    public username?: String,
    public emailVerified?: Boolean,
    public owns?: Array<Product>
  ) {
    this.firstName = 'Ammar';
    this.lastName = 'Hasan';
    this.address = 'WiesenmuhleStr 3';
    this.phone = '+491';
    this.username = 'ammar94';
    this.email = 'hasanammar94@gmail.com';
    this.emailVerified = false;
    this.id = '5c017125b00112f7ff8570ea';
  }
}

export class Product {
  constructor(
    public name: String,
    public location: String,
    public postedDate: Date,
    public description: String,
    public status: String,
    public sold: Boolean,
    public id: String,
    public images: Array<String>,
    public price: Number,
  ) { }
}

export class Criteria {
  constructor(
    public area: String,
    public minPrice: number,
    public maxPrice: number,
    public postedDate: Date
  ) {}
}
