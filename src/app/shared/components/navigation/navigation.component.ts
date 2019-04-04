import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { AppUser } from '../../../shared/models/app-user';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../../../shared/models/shopping-cart'; 
import { DOCUMENT } from "@angular/platform-browser"

@Component({
  selector: "sc-nav",
  templateUrl: "./navigation.component.html"
})
export class NavigationComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  public navClass: string = "navbar navbar-expand-lg navbar-light fixed-top"
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private auth: AuthService,
    private cartService: ShoppingCartService
  ){
    
  }

  public isNavbarCollapsed = true;

  @HostListener("window:scroll", [])
  onWindowScroll(){
    if( this.document.documentElement.scrollTop <= 100 ) this.navClass = "navbar navbar-expand-lg navbar-light fixed-top"
    else this.navClass = "navbar navbar-expand-lg navbar-light fixed-top navbar-shrink"
  }

  logout() {
    this.auth.logout();
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => (this.appUser = appUser));
    // this.cart$ = await this.cartService.getCart();

  }
}