import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { SeoService } from "../../../shared/services/seo.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {
  cart$;
  constructor(private cartService: ShoppingCartService, private seo: SeoService) {}

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
    this.seo.generateTags({ title: "Strong and Courageous - My Cart" })
  }

  clearCart() {
    this.cartService.clearCart();
  }
}