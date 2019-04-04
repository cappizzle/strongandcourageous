import { Component, Input } from '@angular/core';
import { ShoppingCart } from '../../../shared/models/shopping-cart';

@Component({
  selector: 'app-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html'
})
export class ShoppingCartSummaryComponent {
  @Input('cart') cart: ShoppingCart;
}