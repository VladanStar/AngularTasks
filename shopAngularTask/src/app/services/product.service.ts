import { Injectable } from '@angular/core';
import { Product } from 'src/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private products:Product[];

  constructor() {
this.products=[
new Product(101, "Phone X",799,"A large phone"),
new Product(102, "Phone Standard", 699,"A great phon"),
new Product(103, "Phone mini",299,"")
];
  }

public getProducts():Product[]{
returnthis.product;
}
}
