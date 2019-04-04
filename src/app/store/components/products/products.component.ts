import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';

import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { Subscription, Observable } from 'rxjs';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { SeoService } from '../../../shared/services/seo.service';

@Component({
  selector: "sc-shop",
  templateUrl: "./products.component.html"
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: any[] = [];
  cart$: Observable<ShoppingCart>;
  category: string;

  constructor(
    private seo: SeoService,
    private productService: ProductService,
    private cartService: ShoppingCartService,
    private route: ActivatedRoute
  ){}

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
    this.populateProducts();
    this.seo.generateTags({
      title: "Strong and Courageous - Shop"
    })
  }

  private populateProducts() {
    this.productService
      .getAll<Product>()
      .subscribe(
        products => (this.filteredProducts = this.products = products)
      );

    this.route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
      this.applyFilter();
    });
  }
  private applyFilter() {
    this.filteredProducts = this.category
      ? this.products.filter(p => p.category == this.category)
      : this.products;
  }
}