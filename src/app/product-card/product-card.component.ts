import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  cardStatus: {red: boolean, transparent: boolean, yellow: boolean};
  constructor() { }

  ngOnInit() {
    if (this.product) {
      this.cardStatus = {
        red: this.product.stock > 0 && this.product.stock < 15,
        transparent: this.product.stock === 0,
        yellow: this.product.stock >= 15 && this.product.stock < 50
      };
    }
  }

  computeColorStatus() {
    if (this.product) {
      return {
        red: this.product.stock > 0 && this.product.stock < 15,
        transparent: this.product.stock === 0,
        yellow: this.product.stock >= 15 && this.product.stock < 50
      };
    }
  }

}
