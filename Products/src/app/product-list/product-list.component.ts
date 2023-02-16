import { Component } from '@angular/core';
import { ProductService } from './product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  searchText: string = '';
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  ngOnChanges() {
    this.filterProducts();
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(
      (product) => product.name.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
    );
  }
}

interface Product {
  id: number;
  name: string;
  price: number;
}
