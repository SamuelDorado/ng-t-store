import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product
  @Output() onAddToCart= new EventEmitter<string>()
  constructor() { }

  ngOnInit() {
  }

  computeColorStatus() {
    return {
      red: this.product.stock > 0 && this.product.stock < 15,
      transparent: this.product.stock == 0,
      yellow: this.product.stock >= 15 && this.product.stock < 50
    }
  }

  addToCart(){
    this.onAddToCart.emit(this.product.id)
  }

}
