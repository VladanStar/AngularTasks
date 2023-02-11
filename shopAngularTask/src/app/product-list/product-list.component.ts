import { Component } from '@angular/core';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

public products: Product[]=[];

}
