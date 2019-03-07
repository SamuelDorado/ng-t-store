import { ProductsService } from './services/products.service';
import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [];

  filteredProducts: Product[] = [];

  constructor(private productsService: ProductsService) {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = this.products;
    });
  }

  filterNoStock() {
    this.filteredProducts =
      this.products.filter((product: Product) => !!(product.stock));
  }
  resetFilter() {
    this.filteredProducts = this.products;
  }
}
