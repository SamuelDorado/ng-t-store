import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [
    {
      id: '0',
      name: 'Star Wars Lasers',
      description: 'Darth Vader vs Luke Skywalker T-Shirt. From fathers to sons. Deluxe Edition',
      price: '9$',
      stock: 11,
      img: 'https://ih1.redbubble.net/image.188543604.8381/ra,unisex_tshirt,x2950,heather_grey,front-c,648,590,750,1000-bg,f8f8f8.lite-1.jpg'
    },
    {
      id: '1',
      name: 'Starfighter',
      description: 'Starfighter T-Shirt. Sizes: XL, L, M unisex. Small and maneuverable spacecraft designed for combat in the atmosphere or space',
      price: '10$',
      stock: 100,
      img: 'https://ih1.redbubble.net/image.129827801.6109/ra,unisex_tshirt,x2950,101010:01c5ca27c6,front-c,648,590,750,1000-bg,f8f8f8.lite-1u1.jpg'
    },
    {
      id: '2',
      name: 'Evolution Wars',
      description: 'Evolution Star Wars Shirt. Sizes XXL-L-M-S-XS. All colors',
      price: '9,95$',
      stock: 0,
      img: 'https://ih0.redbubble.net/image.118674840.8496/ra,unisex_tshirt,x2950,fafafa:ca443f4786,front-c,648,590,750,1000-bg,f8f8f8.lite-1u4.jpg'
    },
    {
      id: '3',
      name: 'Star Wars Yoda',
      description: 'Yoda shirt minimal style black.  a male member of a mysterious species, was a revered Jedi Master who served as the Grand Master of the Jedi Order in the waning days of the Galactic Republic',
      price: '15,45$',
      stock: 15,
      img: 'https://ih1.redbubble.net/image.376525911.7143/ra,unisex_tshirt,x2950,101010:01c5ca27c6,front-c,648,590,750,1000-bg,f8f8f8.lite-1u6.jpg'
    },
    {
      id: '4',
      name: 'Rebel',
      description: 'Rebel logo shirt. Buy now!',
      price: '12,95$',
      stock: 50,
      img: 'https://ih0.redbubble.net/image.287714555.9686/ra,unisex_tshirt,x2950,101010:01c5ca27c6,front-c,648,590,750,1000-bg,f8f8f8.lite-1u3.jpg'
    },
    {
      id: '5',
      name: 'HAN SOLO',
      description: 'Han Solo Deluxe Edition. Han Solo was a human male smuggler who became a leader in the Alliance to Restore the Republic and an instrumental figure in the defeat of the Galactic Empire during the Galactic Civil War',
      price: '50$',
      stock: 1,
      img: 'https://ih0.redbubble.net/image.186214312.7738/ra,unisex_tshirt,x2950,322e3f:696a94a5d4,front-c,648,590,750,1000-bg,f8f8f8.lite-1.jpg'
    }
  ];

  filteredProducts: Product[] = [];

  constructor() {
    this.filteredProducts = this.products;
  }

  filterNoStock() {
    this.filteredProducts =
      this.products.filter((product: Product) => !!(product.stock));
  }
  resetFilter() {
    this.filteredProducts = this.products;
  }
}
