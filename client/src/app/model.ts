export class User {
  name: String;
  username: String;
  password: String;
  avatar: String;
  email: String;
  id: String;
}

export class Product {
  constructor(
    public description: String,
    public createdBy: User,
    public createdAt: Date,
    public city: String,
    public images?: Array<String>,
    public latitude?: Number,
    public longitude?: Number,
    public upvote?: Array<User>,
    public solved?: Boolean,
    public id?: String
  ) { }
}
