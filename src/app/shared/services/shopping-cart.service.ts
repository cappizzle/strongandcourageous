import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Product } from '../../shared/models/product';
import { take } from 'rxjs/operators';
import { ShoppingCart } from '../../shared/models/shopping-cart';
import { ShoppingCartItem } from '../../shared/models/shopping-cart-item';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  constructor(private db: AngularFireDatabase) {}

  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCart();
    return this.db
      .object('/shopping-carts/' + cartId)
      .snapshotChanges()
      .pipe(map((x: any) => {
        if(x.payload.val()) return new ShoppingCart(x.payload.val().items)
        else return
      } ) );
  }

  async addToCart(product: Product) { 
    this.updateItem(product, 1);
  }

  async removeFromCart(product: Product) {
    this.updateItem(product, -1);
  }

  async clearCart() {
    let cartId = await this.getOrCreateCart();
    this.db.object('/shopping-carts/' + cartId + '/items/').remove();
  }

  private getItem(
    cartId: string,
    productId: string
  ): AngularFireObject<ShoppingCartItem> {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private create() {
    return this.db.list('/shopping-carts/').push({
      dateCreated: new Date().getTime()
    });
  }

  private async getOrCreateCart(): Promise<string> {
    let cartId = localStorage.getItem('cartId');

    if (cartId) return cartId;

    let res = await this.create();
    localStorage.setItem('cartId', res.key);
    return res.key;
  }

  private async updateItem(product: Product, change: number) {
    let cartId = await this.getOrCreateCart();
    let item$ = this.getItem(cartId, product.key);

    item$
      .snapshotChanges()
      .pipe(take(1))
      .subscribe(item => {
        let quantity =
          ((item.payload.val() && item.payload.val().quantity) || 0) + change;
        if (quantity === 0) item$.remove();
        else
          item$.update({
            title: product.title,
            imageUrl: product.imageUrl,
            price: product.price,
            quantity
          });
      });
  }
}