export class Customer {
  id: String;
  customerFName: String;
  customerLName: String;
  customerAddress: String;
  customerPhone: String;
  email: String;
}

export class Product {
  constructor(
    public name: String,
    public location: String,
    public postedDate: Date,
    public description: String,
    public status: String,
    public sold: Boolean,
    public id: String
  ) { }
}

export class Criteria {
  constructor(
    public area: String,
    public minPrice: number,
    public maxPrice: number,
    public postedDate: Date
  ){}
}
